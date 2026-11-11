/**
 * STEELFORGE — Core Navigation, Theme, RTL/LTR, Three.js, GSAP, AOS & Swiper Controller
 */
(function () {
  const THEME_KEY = "steelforge_theme";
  const DIR_KEY = "steelforge_dir";
  let swiperInstance = null;

  // Apply saved preferences immediately
  function applyTheme(theme) {
    const resolved = theme === "light" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", resolved);
    localStorage.setItem(THEME_KEY, resolved);
    updateThemeButtons(resolved);
  }

  function updateThemeButtons(theme) {
    const isDark = theme === "dark";
    document.querySelectorAll(".js-theme-toggle").forEach((btn) => {
      const sunIcon = btn.querySelector(".icon-sun");
      const moonIcon = btn.querySelector(".icon-moon");
      const label = btn.querySelector(".theme-label");
      if (sunIcon && moonIcon) {
        // Show Sun when in Dark mode (click to switch to Light), Moon when in Light mode
        sunIcon.style.display = isDark ? "inline-flex" : "none";
        moonIcon.style.display = isDark ? "none" : "inline-flex";
      }
      if (label) {
        const lang = document.documentElement.getAttribute("dir") === "rtl" ? "ar" : "en";
        const dict = window.SF_I18N ? window.SF_I18N[lang] : null;
        label.textContent = isDark
          ? (dict ? dict.theme_light : "Light")
          : (dict ? dict.theme_dark : "Dark");
      }
      btn.setAttribute("aria-label", isDark ? "Switch to Light Mode" : "Switch to Dark Mode");
      btn.setAttribute("title", isDark ? "Switch to Light Mode" : "Switch to Dark Mode");
    });
  }

  function applyDirection(dir) {
    const resolved = dir === "rtl" ? "rtl" : "ltr";
    const lang = resolved === "rtl" ? "ar" : "en";
    document.documentElement.setAttribute("dir", resolved);
    document.documentElement.setAttribute("lang", lang);
    localStorage.setItem(DIR_KEY, resolved);
    applyTranslations(lang);
    updateThemeButtons(document.documentElement.getAttribute("data-theme") || "dark");
    initSwiper();
  }

  function applyTranslations(lang) {
    if (!window.SF_I18N || !window.SF_I18N[lang]) return;
    const dict = window.SF_I18N[lang];
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
    document.querySelectorAll(".js-dir-label").forEach((el) => {
      el.textContent = dict.dir_label || (lang === "ar" ? "LTR / EN" : "RTL / AR");
    });
  }

  // Swiper Initialization (supports dynamic LTR <-> RTL switch)
  function initSwiper() {
    const container = document.querySelector(".sf-testimonial-swiper");
    if (!container || typeof Swiper === "undefined") return;

    if (swiperInstance) {
      swiperInstance.destroy(true, true);
      swiperInstance = null;
    }

    swiperInstance = new Swiper(".sf-testimonial-swiper", {
      slidesPerView: 1,
      spaceBetween: 24,
      loop: true,
      autoplay: {
        delay: 5200,
        disableOnInteraction: false
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true
      },
      breakpoints: {
        768: { slidesPerView: 2 },
        1200: { slidesPerView: 3 }
      }
    });
  }

  // Three.js Subtle Steel Structural Grid Background
  function initThreeHero() {
    const canvas = document.getElementById("sf-hero-canvas");
    if (!canvas || typeof THREE === "undefined") return;

    try {
      const parent = canvas.parentElement;
      const width = parent.clientWidth || window.innerWidth;
      const height = parent.clientHeight || 500;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(50, width / height, 0.1, 1000);
      camera.position.set(0, 2, 16);

      const renderer = new THREE.WebGLRenderer({ canvas: canvas, alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setSize(width, height, false);

      // Subtle steel lattice truss bars
      const group = new THREE.Group();
      const steelMat = new THREE.LineBasicMaterial({
        color: 0x8C969F,
        transparent: true,
        opacity: 0.24
      });
      const accentMat = new THREE.LineBasicMaterial({
        color: 0xF07832,
        transparent: true,
        opacity: 0.32
      });

      const gridGeo = new THREE.BoxGeometry(16, 6, 6, 8, 3, 3);
      const wireGeo = new THREE.WireframeGeometry(gridGeo);
      const truss = new THREE.LineSegments(wireGeo, steelMat);
      group.add(truss);

      const accentGeo = new THREE.IcosahedronGeometry(3.4, 1);
      const accentWire = new THREE.WireframeGeometry(accentGeo);
      const coreMesh = new THREE.LineSegments(accentWire, accentMat);
      coreMesh.position.set(4.5, 0.2, -1);
      group.add(coreMesh);

      scene.add(group);

      let frameId = null;
      const animate = () => {
        frameId = requestAnimationFrame(animate);
        group.rotation.y += 0.0014;
        coreMesh.rotation.x += 0.0018;
        renderer.render(scene, camera);
      };
      animate();

      window.addEventListener("resize", () => {
        const w = parent.clientWidth || window.innerWidth;
        const h = parent.clientHeight || 500;
        camera.aspect = w / h;
        camera.updateProjectionMatrix();
        renderer.setSize(w, h, false);
      });

      window.addEventListener("beforeunload", () => {
        if (frameId) cancelAnimationFrame(frameId);
      });
    } catch (err) {
      // Fail silently if WebGL is disabled; CSS backdrop remains intact
    }
  }

  // GSAP Hero & Scroll Animations
  function initAnimations() {
    if (typeof AOS !== "undefined") {
      AOS.init({
        duration: 620,
        easing: "ease-out-cubic",
        once: true,
        offset: 50
      });
    }

    if (typeof gsap !== "undefined") {
      gsap.from(".js-hero-anim", {
        y: 26,
        opacity: 0,
        duration: 0.72,
        stagger: 0.11,
        ease: "power3.out",
        clearProps: "transform"
      });

      const floatEl = document.querySelector(".js-hero-float");
      if (floatEl) {
        gsap.to(floatEl, {
          y: -8,
          duration: 2.8,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut"
        });
      }

      const barFill = document.querySelector(".sf-stock-progress-fill");
      if (barFill) {
        gsap.from(barFill, {
          width: "15%",
          duration: 1.2,
          ease: "power2.out"
        });
      }

      if (typeof ScrollTrigger !== "undefined") {
        gsap.registerPlugin(ScrollTrigger);
        document.querySelectorAll(".js-stat-num").forEach((el) => {
          const target = parseInt(el.getAttribute("data-count"), 10);
          if (isNaN(target)) return;
          const suffix = el.getAttribute("data-suffix") || "";
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 1.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true
            },
            onUpdate: () => {
              el.textContent = Math.round(obj.val) + suffix;
            }
          });
        });
      }
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    // 1. Initialize Lucide Icons
    if (typeof lucide !== "undefined") {
      lucide.createIcons();
    }

    // 2. Restore saved Theme & Direction
    const savedTheme = localStorage.getItem(THEME_KEY) || "dark";
    const savedDir = localStorage.getItem(DIR_KEY) || "ltr";
    applyTheme(savedTheme);
    applyDirection(savedDir);

    // 3. Theme Toggle Click Handlers (Desktop & Mobile Drawer)
    document.querySelectorAll(".js-theme-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme") || "dark";
        applyTheme(current === "dark" ? "light" : "dark");
      });
    });

    // 4. RTL / LTR Toggle Click Handlers (Desktop & Mobile Drawer)
    document.querySelectorAll(".js-dir-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("dir") || "ltr";
        applyDirection(current === "rtl" ? "ltr" : "rtl");
      });
    });

    // 5. Mobile Hamburger Drawer
    const hamburgerBtn = document.getElementById("sf-hamburger-btn");
    const mobileDrawer = document.getElementById("sf-mobile-drawer");
    if (hamburgerBtn && mobileDrawer) {
      hamburgerBtn.addEventListener("click", () => {
        const isOpen = mobileDrawer.classList.toggle("open");
        hamburgerBtn.setAttribute("aria-expanded", String(isOpen));
        document.body.style.overflow = isOpen ? "hidden" : "";
      });

      mobileDrawer.querySelectorAll("a").forEach((link) => {
        link.addEventListener("click", () => {
          mobileDrawer.classList.remove("open");
          hamburgerBtn.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        });
      });

      window.addEventListener("resize", () => {
        if (window.innerWidth > 1024 && mobileDrawer.classList.contains("open")) {
          mobileDrawer.classList.remove("open");
          hamburgerBtn.setAttribute("aria-expanded", "false");
          document.body.style.overflow = "";
        }
      });
    }

    // 6. Desktop Dropdown Keyboard/Click Accessibility
    document.querySelectorAll(".sf-nav-item.has-dropdown > .sf-nav-link").forEach((trigger) => {
      trigger.addEventListener("click", (e) => {
        const parent = trigger.parentElement;
        if (window.innerWidth > 1024) {
          parent.classList.toggle("open");
        }
      });
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest(".sf-nav-item.has-dropdown")) {
        document.querySelectorAll(".sf-nav-item.has-dropdown.open").forEach((el) => el.classList.remove("open"));
      }
    });

    // 7. Sticky Navbar Elevation on Scroll
    const navbar = document.querySelector(".sf-navbar");
    if (navbar) {
      window.addEventListener("scroll", () => {
        navbar.classList.toggle("is-scrolled", window.scrollY > 18);
      });
    }

    // 8. FAQ Accordions
    document.querySelectorAll(".sf-accordion-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.closest(".sf-accordion-item");
        const isOpen = item.classList.contains("open");
        item.parentElement.querySelectorAll(".sf-accordion-item").forEach((other) => other.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      });
    });

    // 9. Home 2 Interactive IS 1786 TMT Weight Estimator
    const estDia = document.getElementById("est-diameter");
    const estBars = document.getElementById("est-bars");
    const estKg = document.getElementById("est-kg");
    const estMt = document.getElementById("est-mt");
    const estCta = document.getElementById("est-enquire-btn");

    function updateEstimator() {
      if (!estDia || !estBars || !estKg || !estMt) return;
      const d = parseFloat(estDia.value) || 12;
      const bars = Math.max(1, parseFloat(estBars.value) || 0);
      const weightPerM = (d * d) / 162;
      const totalKg = weightPerM * 12 * bars;
      const totalMt = totalKg / 1000;
      estKg.textContent = `${totalKg.toFixed(1)} kg`;
      estMt.textContent = `${totalMt.toFixed(3)} MT`;
      if (estCta) {
        const q = new URLSearchParams({
          category: "TMT Bars",
          size: `${d} mm`
        }).toString();
        estCta.setAttribute("href", `price-enquiry.html?${q}`);
      }
    }

    if (estDia && estBars) {
      estDia.addEventListener("change", updateEstimator);
      estBars.addEventListener("input", updateEstimator);
      updateEstimator();
    }

    // 11. Preloader Dismiss (skip immediately if deep-linking via #hash such as #brands)
    const preloader = document.getElementById("sf-preloader");
    if (preloader) {
      if (window.location.hash) {
        preloader.classList.add("is-done");
      } else {
        setTimeout(() => {
          preloader.classList.add("is-done");
        }, 360);
      }
    }

    // 11b. Reliable Hash / Section Navigation & Active Nav State for #brands
    function updateHomeBrandsActiveState(brandsActive) {
      if (!document.body.classList.contains("page-home")) return;
      const homeLinks = document.querySelectorAll('.sf-nav-links > li > a[href="index.html"], .sf-mobile-list a[href="index.html"]');
      const brandLinks = document.querySelectorAll('a[href="#brands"]');
      homeLinks.forEach((el) => el.classList.toggle("active", !brandsActive));
      brandLinks.forEach((el) => el.classList.toggle("active", brandsActive));
    }

    function scrollToHashTarget(hash, smooth) {
      if (!hash || hash.length < 2) return;
      const target = document.getElementById(hash.slice(1));
      if (!target) return;
      const nav = document.querySelector(".sf-navbar");
      const navOffset = (nav ? nav.offsetHeight : 76) + 12;
      const top = Math.max(0, target.getBoundingClientRect().top + window.scrollY - navOffset);
      window.scrollTo({ top: top, behavior: smooth ? "smooth" : "auto" });
      if (hash === "#brands") {
        updateHomeBrandsActiveState(true);
      }
    }

    if (window.location.hash) {
      scrollToHashTarget(window.location.hash, false);
      window.addEventListener("load", () => {
        scrollToHashTarget(window.location.hash, false);
        setTimeout(() => scrollToHashTarget(window.location.hash, false), 140);
      });
    }

    window.addEventListener("hashchange", () => {
      if (window.location.hash) {
        scrollToHashTarget(window.location.hash, true);
      }
    });

    document.querySelectorAll('a[href="#brands"]').forEach((link) => {
      link.addEventListener("click", (e) => {
        const target = document.getElementById("brands");
        if (target) {
          e.preventDefault();
          if (window.location.hash !== "#brands") {
            history.replaceState(null, "", "#brands");
          }
          scrollToHashTarget("#brands", true);
        }
      });
    });

    const brandsSection = document.getElementById("brands");
    if (brandsSection && document.body.classList.contains("page-home")) {
      const syncBrandsActiveOnScroll = () => {
        const rect = brandsSection.getBoundingClientRect();
        const inBrands = rect.top <= 160 && rect.bottom >= 160;
        updateHomeBrandsActiveState(inBrands || (window.location.hash === "#brands" && window.scrollY > 300));
      };
      window.addEventListener("scroll", syncBrandsActiveOnScroll, { passive: true });
    }

    // 12. Floating WhatsApp & Back-to-Top Action Cluster
    if (!document.querySelector(".sf-floating-actions")) {
      const floatWrap = document.createElement("div");
      floatWrap.className = "sf-floating-actions";
      floatWrap.innerHTML = `
        <a href="https://wa.me/919800000000?text=Hello%20SteelForge%2C%20I%20would%20like%20to%20enquire%20about%20steel%20%26%20TMT%20bars."
           target="_blank" rel="noopener noreferrer"
           class="sf-float-btn sf-float-wa"
           aria-label="WhatsApp SteelForge Enquiry">
          <i data-lucide="message-circle"></i>
        </a>
        <button type="button" id="sf-scroll-top" class="sf-float-btn sf-float-top" aria-label="Scroll to top">
          <i data-lucide="arrow-up"></i>
        </button>
      `;
      document.body.appendChild(floatWrap);
      if (typeof lucide !== "undefined") {
        lucide.createIcons();
      }
      const topBtn = document.getElementById("sf-scroll-top");
      if (topBtn) {
        window.addEventListener("scroll", () => {
          topBtn.classList.toggle("visible", window.scrollY > 360);
        });
        topBtn.addEventListener("click", () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        });
      }
    }

    // 10. Initialize 3D Hero, GSAP/AOS & Swiper
    initThreeHero();
    initAnimations();
    initSwiper();
  });
})();

