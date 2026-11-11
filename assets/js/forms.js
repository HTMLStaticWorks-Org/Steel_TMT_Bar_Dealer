/**
 * STEELFORGE — Price Enquiry & Contact Form Validation + AJAX Demo Submission
 */
(function ($) {
  $(function () {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    const phonePattern = /^[+]?[\d\s\-().]{8,18}$/;

    function validateField($input) {
      const val = ($input.val() || "").trim();
      const type = $input.attr("type");
      const isRequired = $input.prop("required");
      let valid = true;

      if (isRequired && !val) {
        valid = false;
      } else if (val && type === "email" && !emailPattern.test(val)) {
        valid = false;
      } else if (val && type === "tel" && !phonePattern.test(val)) {
        valid = false;
      } else if (val && type === "number" && Number(val) <= 0) {
        valid = false;
      }

      $input.toggleClass("is-invalid", !valid);
      return valid;
    }

    // Pre-fill Price Enquiry fields from URL query parameters
    const $enquiryForm = $("#sf-enquiry-form");
    if ($enquiryForm.length) {
      const params = new URLSearchParams(window.location.search);
      if (params.get("category")) $("#enq-category").val(params.get("category"));
      if (params.get("brand")) $("#enq-brand").val(params.get("brand"));
      if (params.get("grade")) $("#enq-grade").val(params.get("grade"));
      if (params.get("size")) $("#enq-size").val(params.get("size"));

      $("#enq-file").on("change", function () {
        const file = this.files && this.files[0];
        $("#enq-file-name").text(
          file ? `Selected: ${file.name} (${Math.max(1, Math.round(file.size / 1024))} KB)` : "No file selected (PDF, XLSX, JPG, PNG up to 10 MB)"
        );
      });

      $enquiryForm.find("input, select, textarea").on("blur change", function () {
        validateField($(this));
      });

      $enquiryForm.on("submit", function (e) {
        e.preventDefault();
        const $alertSuccess = $("#enq-success");
        const $alertError = $("#enq-error");
        const $submitBtn = $("#enq-submit-btn");
        $alertSuccess.removeClass("show");
        $alertError.removeClass("show");

        let formValid = true;
        $enquiryForm.find("[required], input[type='email'], input[type='tel'], input[type='number']").each(function () {
          if (!validateField($(this))) {
            formValid = false;
          }
        });

        if (!formValid) {
          $alertError.addClass("show");
          const $firstInvalid = $enquiryForm.find(".is-invalid").first();
          if ($firstInvalid.length) $firstInvalid.trigger("focus");
          return;
        }

        const originalHtml = $submitBtn.html();
        $submitBtn.prop("disabled", true).html(`<span class="sf-spinner"></span> <span>Submitting Quotation Request...</span>`);

        // Simulated AJAX-style submission (Demo Mode)
        const payload = {
          referenceId: "SF-RFQ-" + Math.floor(100000 + Math.random() * 900000),
          customer: $("#enq-name").val().trim(),
          category: $("#enq-category").val(),
          brand: $("#enq-brand").val(),
          grade: $("#enq-grade").val(),
          size: $("#enq-size").val(),
          qty: $("#enq-qty").val(),
          unit: $("#enq-unit").val()
        };

        $.Deferred(function (dfd) {
          setTimeout(function () {
            dfd.resolve(payload);
          }, 850);
        }).done(function (res) {
          $submitBtn.prop("disabled", false).html(originalHtml);
          $("#enq-ref-code").text(res.referenceId);
          $("#enq-summary-text").text(
            `${res.qty} ${res.unit} • ${res.brand} ${res.category} (${res.grade}, ${res.size})`
          );
          $alertSuccess.addClass("show");
          $enquiryForm[0].reset();
          $enquiryForm.find(".is-invalid").removeClass("is-invalid");
          $("#enq-file-name").text("No file selected (PDF, XLSX, JPG, PNG up to 10 MB)");
        });
      });
    }

    // Contact Form Handler
    const $contactForm = $("#sf-contact-form");
    if ($contactForm.length) {
      $contactForm.find("input, select, textarea").on("blur change", function () {
        validateField($(this));
      });

      $contactForm.on("submit", function (e) {
        e.preventDefault();
        const $alertSuccess = $("#con-success");
        const $alertError = $("#con-error");
        const $submitBtn = $("#con-submit-btn");
        $alertSuccess.removeClass("show");
        $alertError.removeClass("show");

        let formValid = true;
        $contactForm.find("[required], input[type='email'], input[type='tel']").each(function () {
          if (!validateField($(this))) {
            formValid = false;
          }
        });

        if (!formValid) {
          $alertError.addClass("show");
          const $firstInvalid = $contactForm.find(".is-invalid").first();
          if ($firstInvalid.length) $firstInvalid.trigger("focus");
          return;
        }

        const originalHtml = $submitBtn.html();
        $submitBtn.prop("disabled", true).html(`<span class="sf-spinner"></span> <span>Sending Enquiry...</span>`);

        setTimeout(function () {
          const refId = "SF-MSG-" + Math.floor(10000 + Math.random() * 90000);
          $submitBtn.prop("disabled", false).html(originalHtml);
          $("#con-ref-code").text(refId);
          $alertSuccess.addClass("show");
          $contactForm[0].reset();
          $contactForm.find(".is-invalid").removeClass("is-invalid");
        }, 800);
      });
    }

    // Configurable WhatsApp Enquiry CTA
    const $waBtn = $("#sf-whatsapp-cta");
    if ($waBtn.length) {
      const configuredNumber = $waBtn.data("whatsapp") || "919800000000";
      const message = encodeURIComponent("Hello SteelForge Dispatch Desk, I would like to enquire about steel & TMT bar availability and pricing.");
      $waBtn.attr("href", `https://wa.me/${configuredNumber}?text=${message}`);
    }
  });
})(jQuery);

