
// ============================================
// UNIVERSAL SERVICE - BUSINESS INFORMATION
// ============================================

const BUSINESS = {
    name: "Universal AC, Refrigerator & Washing Machine Service",
    phone: "9963770065",
    whatsapp: "919963770065",
    address: "Near Modern Bus Stand, Beside Teja Hospital, Shivaji Nagar, Siddipet, Telangana 502103, India"
};


// ============================================
// SERVICES INFORMATION AND IMAGE FILENAMES
// ============================================

const SERVICES = {

    "ac-repair": {
        title: "AC Repair in Siddipet",
        image: "ac-repair.jpeg",
        description: "Contact Universal Service for air conditioner repair enquiries in Siddipet.",
        details: [
            "Air conditioner inspection enquiries",
            "Cooling-related issue enquiries",
            "AC operating problem enquiries",
            "General AC repair assistance"
        ]
    },

    "ac-installation": {
        title: "AC Installation in Siddipet",
        image: "ac-installation.jpeg",
        description: "Get in touch for air conditioner installation and setup enquiries.",
        details: [
            "New AC installation enquiries",
            "Split AC installation enquiries",
            "Window AC installation enquiries",
            "Installation-related assistance"
        ]
    },

    "ac-servicing": {
        title: "AC Servicing in Siddipet",
        image: "ac-servicing.jpeg",
        description: "Contact us to discuss air conditioner cleaning and maintenance requirements.",
        details: [
            "AC general servicing enquiries",
            "Air filter cleaning enquiries",
            "AC maintenance enquiries",
            "Cooling performance checks"
        ]
    },

    "refrigerator-repair": {
        title: "Refrigerator Repair in Siddipet",
        image: "refrigerator-repair.jpeg",
        description: "Contact us for refrigerator inspection and repair enquiries.",
        details: [
            "Refrigerator cooling issue enquiries",
            "Unusual noise enquiries",
            "Refrigerator operating problems",
            "General refrigerator repair assistance"
        ]
    },

    "washing-machine-repair": {
        title: "Washing Machine Repair in Siddipet",
        image: "washing-machine-repair.jpeg",
        description: "Get in touch to discuss washing machine repair requirements.",
        details: [
            "Washing machine operating issues",
            "Water filling or draining enquiries",
            "Spin-cycle problem enquiries",
            "General washing machine repair assistance"
        ]
    },

    "water-cooler-repair": {
        title: "Water Cooler Repair in Siddipet",
        image: "water-cooler-repair.jpeg",
        description: "Contact us for water cooler inspection and repair enquiries.",
        details: [
            "Water cooler cooling issue enquiries",
            "Water flow problem enquiries",
            "General water cooler maintenance",
            "Water cooler repair assistance"
        ]
    },

    "other-appliances": {
        title: "Other Home Appliance Services in Siddipet",
        image: "other-appliances.jpeg",
        description: "Contact us to enquire about service requirements for other home appliances.",
        details: [
            "Other household appliance enquiries",
            "Appliance inspection requests",
            "Maintenance-related enquiries",
            "Discuss your specific appliance requirement"
        ]
    }

};


// ============================================
// MOBILE NAVIGATION
// ============================================

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {
        mainNav.classList.toggle("active");
    });

    mainNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {
            mainNav.classList.remove("active");
        });

    });

}


// ============================================
// AUTOMATIC FOOTER YEAR
// ============================================

const currentYear = document.getElementById("currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// ============================================
// WHATSAPP BOOKING FORM
// ============================================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("customerName").value.trim();

        const phone = document.getElementById("customerPhone").value.trim();

        const service = document.getElementById("serviceType").value;

        const message = document.getElementById("customerMessage").value.trim();


        if (!name || !phone || !service) {

            alert("Please fill in your name, phone number and service.");

            return;

        }


        const whatsappMessage =

            `Hello ${BUSINESS.name},\n\n` +

            `I would like to enquire about your service.\n\n` +

            `Name: ${name}\n` +

            `Phone: ${phone}\n` +

            `Service: ${service}\n` +

            `Requirement: ${message || "Please contact me."}\n\n` +

            `Thank you.`;


        const whatsappURL =

            `https://wa.me/${BUSINESS.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`;


        window.open(whatsappURL, "_blank", "noopener,noreferrer");

    });

}


// ============================================
// SERVICE DETAIL PAGE RENDERER
// ============================================

function renderServicePage() {

    const serviceKey = document.body.dataset.service;

    const service = SERVICES[serviceKey];


    if (!service) return;


    const main = document.querySelector("main");

    if (!main) return;


    // Create service enquiry list

    const listItems = service.details

        .map(item => `<li>${item}</li>`)

        .join("");


    // Create WhatsApp message

    const whatsappMessage = encodeURIComponent(

        `Hello, I would like to enquire about ${service.title} in Siddipet.`

    );


    // Render service page

    main.innerHTML = `

        <section class="service-detail-hero">

            <div class="container service-detail-layout">


                <div class="service-detail-content">

                    <span class="section-kicker">

                        UNIVERSAL SERVICE · SIDDIPET

                    </span>


                    <h1>${service.title}</h1>


                    <p>${service.description}</p>


                    <div class="hero-buttons">

                        <a href="tel:+91${BUSINESS.phone}"

                           class="button button-primary button-large">

                            ☎ Call Now

                        </a>


                        <a href="https://wa.me/${BUSINESS.whatsapp}?text=${whatsappMessage}"

                           target="_blank"

                           rel="noopener"

                           class="button button-outline button-large">

                            WhatsApp Enquiry

                        </a>

                    </div>

                </div>



                <div class="service-detail-image">

                    <img

                        src="../assets/images/${service.image}"

                        alt="${service.title}"

                        onerror="console.error('Service image not found:', this.src); this.style.display='none'">

                </div>


            </div>

        </section>



        <section class="section service-detail-section">

            <div class="container">


                <div class="section-heading">

                    <span class="section-kicker">OUR SERVICE</span>

                    <h2>Enquire About ${service.title}</h2>

                    <p>${service.description}</p>

                </div>



                <div class="service-detail-grid">


                    <div class="service-detail-card">

                        <h3>Service Enquiries</h3>

                        <ul class="service-detail-list">

                            ${listItems}

                        </ul>

                    </div>



                    <div class="service-detail-card">

                        <h3>Contact Universal Service</h3>


                        <p>

                            Have an appliance problem?

                            Contact us to discuss your service requirement.

                        </p>


                        <p>

                            <strong>Phone:</strong>

                            <a href="tel:+91${BUSINESS.phone}">

                                +91 ${BUSINESS.phone}

                            </a>

                        </p>


                        <p>

                            <strong>Location:</strong>

                            ${BUSINESS.address}

                        </p>


                        <a href="https://wa.me/${BUSINESS.whatsapp}?text=${whatsappMessage}"

                           target="_blank"

                           rel="noopener"

                           class="button button-primary">

                            Chat on WhatsApp

                        </a>

                    </div>


                </div>

            </div>

        </section>



        <section class="service-detail-cta">

            <h2>Need ${service.title}?</h2>

            <p>Contact Universal Service in Siddipet today.</p>


            <a href="https://wa.me/${BUSINESS.whatsapp}?text=${whatsappMessage}"

               target="_blank"

               rel="noopener"

               class="button button-primary">

                Enquire on WhatsApp

            </a>

        </section>

    `;


    // Update browser page title

    document.title = `${service.title} | Universal Service`;

}



// ============================================
// RUN SERVICE PAGE RENDERER
// ============================================

renderServicePage();

/* ========================================
   GALLERY FULL-SCREEN IMAGE VIEWER
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const galleryImages = document.querySelectorAll(".gallery-item img");

    if (!galleryImages.length) {
        return;
    }

    // Create the lightbox
    const lightbox = document.createElement("div");
    lightbox.className = "gallery-lightbox";

    lightbox.innerHTML = `
        <button
            class="gallery-lightbox-close"
            aria-label="Close image viewer"
            type="button">
            &times;
        </button>

        <img
            class="gallery-lightbox-image"
            src=""
            alt="Universal Service gallery image">
    `;

    document.body.appendChild(lightbox);

    const lightboxImage = lightbox.querySelector(".gallery-lightbox-image");
    const closeButton = lightbox.querySelector(".gallery-lightbox-close");

    // Open image when a gallery photo is clicked
    galleryImages.forEach(function (image) {

        image.addEventListener("click", function () {

            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt || "Universal Service work photo";

            lightbox.classList.add("active");
            document.body.style.overflow = "hidden";

        });

    });

    // Close image viewer
    function closeLightbox() {
        lightbox.classList.remove("active");
        lightboxImage.src = "";
        document.body.style.overflow = "";
    }

    closeButton.addEventListener("click", closeLightbox);

    // Close when clicking outside the image
    lightbox.addEventListener("click", function (event) {

        if (event.target === lightbox) {
            closeLightbox();
        }

    });

    // Close with Escape key
    document.addEventListener("keydown", function (event) {

        if (event.key === "Escape" && lightbox.classList.contains("active")) {
            closeLightbox();
        }

    });

});
