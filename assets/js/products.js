/**
 * STEELFORGE — Product Catalog, IS 1786 Grade Data & Interactive Filtering
 * Note: No fabricated live prices are shown; all items direct to quotation enquiry.
 */
window.SF_DATA = {
  grades: [
    {
      code: "Fe 415",
      yieldStress: "415 N/mm² (min)",
      uts: "485 N/mm² (min) or 1.10 × YS",
      tsYsRatio: "1.10",
      elongation: "14.5% (min)",
      agt: "—",
      summary: "General-purpose reinforcement grade with balanced ductility for low-rise residential and light RCC slabs."
    },
    {
      code: "Fe 500",
      yieldStress: "500 N/mm² (min)",
      uts: "545 N/mm² (min) or 1.08 × YS",
      tsYsRatio: "1.08",
      elongation: "12.0% (min)",
      agt: "—",
      summary: "Standard high-strength structural grade suited for commercial frames, residential towers, and RCC columns."
    },
    {
      code: "Fe 500D",
      yieldStress: "500 N/mm² (min)",
      uts: "565 N/mm² (min) or 1.10 × YS",
      tsYsRatio: "1.10",
      elongation: "16.0% (min)",
      agt: "5.0% (min)",
      summary: "Higher-ductility seismic grade featuring tighter Sulfur & Phosphorus control and elevated elongation per IS 1786."
    },
    {
      code: "Fe 550",
      yieldStress: "550 N/mm² (min)",
      uts: "585 N/mm² (min) or 1.06 × YS",
      tsYsRatio: "1.06",
      elongation: "10.0% (min)",
      agt: "—",
      summary: "High-load reinforcement bar designed for heavy industrial foundations, bridges, and deep piling works."
    },
    {
      code: "Fe 550D",
      yieldStress: "550 N/mm² (min)",
      uts: "600 N/mm² (min) or 1.08 × YS",
      tsYsRatio: "1.08",
      elongation: "14.5% (min)",
      agt: "5.0% (min)",
      summary: "Combines 550 MPa proof stress with enhanced seismic ductility for high-rise cores and infrastructure spans."
    },
    {
      code: "Fe 600",
      yieldStress: "600 N/mm² (min)",
      uts: "660 N/mm² (min) or 1.06 × YS",
      tsYsRatio: "1.06",
      elongation: "10.0% (min)",
      agt: "—",
      summary: "Ultra-high-strength grade specified in heavy civil engineering, metro piers, and congested reinforcement zones."
    }
  ],

  tmtSizes: [
    { mm: "8 mm", weightPerM: "0.395 kg/m", weight12m: "4.74 kg", useCase: "Stirrups, slab distribution, ties" },
    { mm: "10 mm", weightPerM: "0.617 kg/m", weight12m: "7.40 kg", useCase: "Slabs, lintels, secondary beams" },
    { mm: "12 mm", weightPerM: "0.888 kg/m", weight12m: "10.66 kg", useCase: "Beams, residential columns, footings" },
    { mm: "16 mm", weightPerM: "1.580 kg/m", weight12m: "18.96 kg", useCase: "Main columns, heavy beams, retaining walls" },
    { mm: "20 mm", weightPerM: "2.469 kg/m", weight12m: "29.63 kg", useCase: "High-load RCC columns, industrial mats" },
    { mm: "25 mm", weightPerM: "3.858 kg/m", weight12m: "46.30 kg", useCase: "Piles, bridge piers, transfer girders" },
    { mm: "32 mm", weightPerM: "6.317 kg/m", weight12m: "75.80 kg", useCase: "Heavy civil foundations, infrastructure" }
  ],

  products: [
    {
      id: "tmt-tata-550d",
      name: "Ribbed TMT Reinforcement Bars — 550D Series",
      category: "TMT Bars",
      brand: "Tata Tiscon",
      grade: "Fe 550D",
      sizes: ["8 mm", "10 mm", "12 mm", "16 mm", "20 mm", "25 mm", "32 mm"],
      spec: "IS 1786:2008 | High-Ductility Ribbed Bar | 12m Standard Length",
      image: "assets/images/IM 2/pexels-serhii-barkanov-2144469453-35598611.jpg",
      description: "Thermomechanically treated deformed bars engineered for strong concrete bonding, seismic ductility, and consistent bendability.",
      certs: "Batch Test & Mill Test Certificate provided with dispatched lot where issued by producer."
    },
    {
      id: "tmt-jsw-500d",
      name: "Neosteel TMT Reinforcement Bars — 500D",
      category: "TMT Bars",
      brand: "JSW Neosteel",
      grade: "Fe 500D",
      sizes: ["8 mm", "10 mm", "12 mm", "16 mm", "20 mm", "25 mm", "32 mm"],
      spec: "IS 1786:2008 | Pure Virgin Iron Ore Route | High Elongation",
      image: "assets/images/IM 2/pexels-wal_-172619-2156618639-37226291.jpg",
      description: "High-ductility TMT reinforcement bars suited for residential complexes, seismic Zone III–V frames, and commercial slabs.",
      certs: "Mill Test Certificate (MTC) traceable by heat and batch number."
    },
    {
      id: "tmt-jindal-550d",
      name: "Panther Ribbed TMT Rebar — Fe 550D",
      category: "TMT Bars",
      brand: "Jindal Panther",
      grade: "Fe 550D",
      sizes: ["8 mm", "10 mm", "12 mm", "16 mm", "20 mm", "25 mm", "32 mm"],
      spec: "IS 1786:2008 | Uniform Martensite Rim | High Tensile Strength",
      image: "assets/images/IM 2/pexels-wouter-demyttenaere-951917-36091694.jpg",
      description: "High-strength deformed TMT bars providing superior load-bearing capacity while preserving site weldability and bend safety.",
      certs: "Batch test verification available upon dispatch request."
    },
    {
      id: "tmt-sail-500",
      name: "SAIL TMT Structural Rebar — Fe 500",
      category: "TMT Bars",
      brand: "SAIL",
      grade: "Fe 500",
      sizes: ["10 mm", "12 mm", "16 mm", "20 mm", "25 mm", "32 mm"],
      spec: "IS 1786:2008 | Infrastructure & Heavy RCC Grade | 12m Bars",
      image: "assets/images/IM 2/pexels-vadym-alyekseyenko-137433856-38520003.jpg",
      description: "Dependable reinforcement bars supplied for public works, bridge abutments, warehouses, and institutional RCC structures.",
      certs: "Supplied with mill batch traceability documentation."
    },
    {
      id: "tmt-kamdhenu-500d",
      name: "Kamdhenu Dual-Rib TMT Bars — Fe 500D",
      category: "TMT Bars",
      brand: "Kamdhenu",
      grade: "Fe 500D",
      sizes: ["8 mm", "10 mm", "12 mm", "16 mm", "20 mm", "25 mm"],
      spec: "IS 1786:2008 | Deep Angular Rib Pattern | Concrete Bonding",
      image: "assets/images/IM 2/pexels-serhii-barkanov-2144469453-35598611.jpg",
      description: "Engineered rib geometry enhances interlock with cured concrete across residential foundations, beams, and shear walls.",
      certs: "Standard batch quality slip and weight tally sheet included."
    },
    {
      id: "tmt-vizag-550",
      name: "Vizag Steel (RINL) TMT Rebar — Fe 550 / Fe 600",
      category: "TMT Bars",
      brand: "Vizag Steel",
      grade: "Fe 600",
      sizes: ["12 mm", "16 mm", "20 mm", "25 mm", "32 mm"],
      spec: "IS 1786:2008 | High-Strength Civil & Metro Grade",
      image: "assets/images/IM 2/pexels-wal_-172619-2156618639-37226291.jpg",
      description: "Heavy-duty Fe 550 and Fe 600 reinforcement stocked for dense column cages, industrial foundations, and flyover piers.",
      certs: "Mill Test Certificate (MTC) supplied per batch."
    },
    {
      id: "tmt-sail-415",
      name: "Classic Structural TMT Bar — Fe 415",
      category: "TMT Bars",
      brand: "SAIL",
      grade: "Fe 415",
      sizes: ["8 mm", "10 mm", "12 mm", "16 mm"],
      spec: "IS 1786:2008 | Residential & Light Slab Reinforcement",
      image: "assets/images/IM 2/pexels-wouter-demyttenaere-951917-36091694.jpg",
      description: "Cost-effective ductile grade commonly specified for single- and two-storey residential dwellings and boundary walls.",
      certs: "Standard yard inspection & weight certification."
    },
    {
      id: "ms-flat-square-bars",
      name: "Mild Steel Bars (Angles, Flats & Squares)",
      category: "Mild Steel Bars",
      brand: "SAIL",
      grade: "IS 2062 E250",
      sizes: ["10 mm", "12 mm", "16 mm", "20 mm", "25 mm"],
      spec: "IS 2062 Grade A | Clean Weldable Carbon Mild Steel",
      image: "assets/images/IM 2/pexels-rolledalloys-metal-supply-8940820.jpg",
      description: "Versatile mild steel bars for fabrication workshops, window grills, base plates, trusses, and general engineering.",
      certs: "Supplied per standard rolling tolerances with tally sheet."
    },
    {
      id: "round-bars-bright",
      name: "MS Round Bars & Shafting Stock",
      category: "Round Bars",
      brand: "Vizag Steel",
      grade: "IS 2062 / EN8",
      sizes: ["12 mm", "16 mm", "20 mm", "25 mm", "32 mm"],
      spec: "Hot-Rolled Smooth Round Stock | Machining & Anchor Use",
      image: "assets/images/IM 2/pexels-rolledalloys-metal-supply-8940820.jpg",
      description: "Plain smooth mild steel round bars used in anchor bolts, dowels, tie rods, industrial shafts, and structural pins.",
      certs: "Chemical & dimensional inspection report on bulk order."
    },
    {
      id: "binding-wire-gi",
      name: "Annealed Black & GI Binding Wire Coils",
      category: "Binding Wire",
      brand: "Tata Tiscon",
      grade: "20 SWG / 18 SWG",
      sizes: ["0.9 mm (20G)", "1.2 mm (18G)"],
      spec: "Soft Annealed Coil | High Twist Ductility | 25 kg / 50 kg Bundles",
      image: "assets/images/IM 2/pexels-willians-huerta-2157111846-36397790.jpg",
      description: "Pliable, break-resistant rebar tying wire enabling fast manual or tool-assisted cage fastening on construction sites.",
      certs: "Coil weight verification and protective moisture wrapping."
    },
    {
      id: "structural-i-beam",
      name: "Structural Steel Beams, Channels & Angles",
      category: "Structural Steel",
      brand: "JSW Neosteel",
      grade: "IS 2062 E250",
      sizes: ["ISMB 150–400", "ISMC 100–250", "ISA 50–150"],
      spec: "Heavy Structural Sections | Sheds, Mezzanines & Bridges",
      image: "assets/images/IM 2/pexels-michael-orshan-2159363670-36003986.jpg",
      description: "Rolled I-beams, C-channels, and equal/unequal angles stocked for factory sheds, PEB frames, and crane girders.",
      certs: "Mill heat identification and section weight verification."
    },
    {
      id: "accessories-stirrups",
      name: "Cut-and-Bend Stirrups & Steel Accessories",
      category: "Other Steel Products",
      brand: "Jindal Panther",
      grade: "Fe 500D",
      sizes: ["8 mm", "10 mm", "12 mm"],
      spec: "Custom Ring Dimensions | Mechanical Couplers & Spacers",
      image: "assets/images/IM 2/pexels-wouter-demyttenaere-951917-36091694.jpg",
      description: "Precision-bent rectangular/circular stirrups, rebar couplers, and rolled steel strips reducing on-site wastage and labor time.",
      certs: "Dimensional batch check prior to site dispatch."
    }
  ]
};

(function ($) {
  $(function () {
    const $grid = $("#sf-product-grid");
    if (!$grid.length) return;

    const $catFilter = $("#filter-category");
    const $brandFilter = $("#filter-brand");
    const $gradeFilter = $("#filter-grade");
    const $sizeFilter = $("#filter-size");
    const $countLabel = $("#sf-result-count");
    const $chipBtns = $(".sf-chip-btn");
    const $resetBtn = $("#filter-reset");

    // Pre-apply query parameters if navigated from Home or Dropdowns
    const params = new URLSearchParams(window.location.search);
    if (params.get("category")) $catFilter.val(params.get("category"));
    if (params.get("brand")) $brandFilter.val(params.get("brand"));
    if (params.get("grade")) $gradeFilter.val(params.get("grade"));
    if (params.get("size")) $sizeFilter.val(params.get("size"));

    function syncChips(selectedCat) {
      $chipBtns.removeClass("active");
      $chipBtns.each(function () {
        if ($(this).data("category") === (selectedCat || "all")) {
          $(this).addClass("active");
        }
      });
    }

    function renderProducts() {
      const cat = $catFilter.val();
      const brand = $brandFilter.val();
      const grade = $gradeFilter.val();
      const size = $sizeFilter.val();

      syncChips(cat);

      const filtered = window.SF_DATA.products.filter((p) => {
        if (cat !== "all" && p.category !== cat) return false;
        if (brand !== "all" && p.brand !== brand) return false;
        if (grade !== "all" && !p.grade.includes(grade)) return false;
        if (size !== "all" && !p.sizes.includes(size)) return false;
        return true;
      });

      $countLabel.text(`Showing ${filtered.length} of ${window.SF_DATA.products.length} steel products`);

      if (!filtered.length) {
        $grid.html(`
          <div style="grid-column: 1 / -1; text-align: center; padding: 3rem 1.5rem;" class="sf-form-card">
            <h3 class="mb-2">No Exact Match in Current Filter</h3>
            <p class="text-muted-sf mb-3">We source custom grades, diameters, and bulk mill lots on request. Reset filters or submit a custom price enquiry.</p>
            <div class="d-flex justify-content-center gap-2 flex-wrap">
              <button type="button" class="sf-btn sf-btn-outline" id="empty-reset-btn">Reset Filters</button>
              <a href="price-enquiry.html" class="sf-btn sf-btn-primary">Request Custom Price</a>
            </div>
          </div>
        `);
        $("#empty-reset-btn").on("click", resetFilters);
        return;
      }

      const cardsHtml = filtered.map((p) => {
        const query = new URLSearchParams({
          category: p.category,
          brand: p.brand,
          grade: p.grade,
          size: p.sizes[0] || ""
        }).toString();

        return `
          <article class="sf-card" data-product-id="${p.id}">
            <div class="sf-card-media">
              <span class="sf-card-badge">${p.grade}</span>
              <img src="${p.image}" alt="${p.name}">
            </div>
            <div class="sf-card-body">
              <div class="d-flex justify-content-between align-items-center mb-2 gap-2">
                <span class="text-orange fw-bold" style="font-size:0.82rem; letter-spacing:0.06em; text-transform:uppercase;">${p.brand}</span>
                <span class="sf-spec-pill">${p.category}</span>
              </div>
              <h3 class="sf-card-title">${p.name}</h3>
              <p class="sf-card-text">${p.spec}</p>
              <div class="sf-card-meta">
                ${p.sizes.slice(0, 5).map((s) => `<span class="sf-spec-pill">${s}</span>`).join("")}
                ${p.sizes.length > 5 ? `<span class="sf-spec-pill">+${p.sizes.length - 5} more</span>` : ""}
              </div>
              <div class="sf-card-footer">
                <button type="button" class="sf-btn sf-btn-outline sf-btn-sm js-open-product" data-id="${p.id}">
                  View Details
                </button>
                <a href="price-enquiry.html?${query}" class="sf-btn sf-btn-primary sf-btn-sm">
                  Enquire for Price
                </a>
              </div>
            </div>
          </article>
        `;
      }).join("");

      $grid.html(cardsHtml);
    }

    function resetFilters() {
      $catFilter.val("all");
      $brandFilter.val("all");
      $gradeFilter.val("all");
      $sizeFilter.val("all");
      renderProducts();
    }

    $catFilter.add($brandFilter).add($gradeFilter).add($sizeFilter).on("change", renderProducts);
    $resetBtn.on("click", resetFilters);

    $chipBtns.on("click", function () {
      const cat = $(this).data("category");
      $catFilter.val(cat);
      renderProducts();
    });

    // Product Detail Modal Handler
    $(document).on("click", ".js-open-product", function () {
      const id = $(this).data("id");
      const product = window.SF_DATA.products.find((item) => item.id === id);
      if (!product) return;

      const gradeInfo = window.SF_DATA.grades.find((g) => product.grade.includes(g.code));
      const query = new URLSearchParams({
        category: product.category,
        brand: product.brand,
        grade: product.grade,
        size: product.sizes[0] || ""
      }).toString();

      $("#modal-prod-title").text(product.name);
      $("#modal-prod-img").attr({ src: product.image, alt: product.name });
      $("#modal-prod-brand").text(product.brand);
      $("#modal-prod-grade").text(product.grade);
      $("#modal-prod-category").text(product.category);
      $("#modal-prod-desc").text(product.description);
      $("#modal-prod-spec").text(product.spec);
      $("#modal-prod-certs").text(product.certs);
      $("#modal-prod-sizes").html(
        product.sizes.map((s) => `<span class="sf-spec-pill">${s}</span>`).join("")
      );

      if (gradeInfo) {
        $("#modal-grade-box").show().html(`
          <strong>${gradeInfo.code} Technical Reference (IS 1786):</strong><br>
          Yield Stress: ${gradeInfo.yieldStress} &bull; UTS: ${gradeInfo.uts} &bull; Min Elongation: ${gradeInfo.elongation}
        `);
      } else {
        $("#modal-grade-box").hide();
      }

      $("#modal-enquire-btn").attr("href", `price-enquiry.html?${query}`);

      const modalEl = document.getElementById("sfProductModal");
      if (modalEl && window.bootstrap) {
        bootstrap.Modal.getOrCreateInstance(modalEl).show();
      }
    });

    renderProducts();
  });
})(jQuery);

