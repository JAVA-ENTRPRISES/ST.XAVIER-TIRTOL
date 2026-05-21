// script.js
document.addEventListener("DOMContentLoaded", () => {
    // Define the header (Make sure this matches your design)
    const header = `
    <header>
        <div class="top-bar">
            <span>📍 TIRTOL, JAGATSINGHAPUR, Odisha</span>
            <span>📞 9861066785 | ✉️ stxaviershighschooltirtol@gmail.com</span>
        </div>
        <nav>
            <div class="logo-area">
                <img src="image/LOGO.jpeg" alt="Logo" class="logo">
                <h1>ST. XAVIERS HIGH SCHOOL</h1>
            </div>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="about.html">About</a></li>
                <li><a href="facilities.html">Facilities</a></li>
                <li><a href="gallery.html">Gallery</a></li>
                <li><a href="admission.html">Admission</a></li>
                <li><a href="mandatory.html">Mandatory Disclosure</a></li>
                <li><a href="contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>`;

    // Define the footer (Corrected syntax)
    const footer = `
    <footer>
        <div class="footer-container">
            <div class="footer-section">
                <img src="image/LOGO.jpeg" alt="Logo" style="height: 40px; filter: brightness(0) invert(1);">
                <p><strong>St. Xaviers High School Tirtol</strong></p>
            </div>

            <div class="footer-section" style="flex: 2; justify-content: center;">
                <ul class="footer-links">
                    <li><a href="mandatory.html">Mandatory Disclosure</a></li>
                    <li><a href="admission.html">Admissions</a></li>
                    <li><a href="gallery.html">Gallery</a></li>
                    <li><a href="contact.html">Contact</a></li>
                </ul>
            </div>

            <div class="footer-section" style="justify-content: flex-end;">
                <p>📞 9861066785</p>
                <p style="margin-left: 15px;">✉️ stxaviershighschooltirtol@gmail.com</p>
            </div>
        </div>
        
        <div class="footer-bottom">
            &copy; 2026 St. Xaviers High School Tirtol| Affiliated to CBSE
        </div>
    </footer>`;

    // Inject into the DOM
    document.body.insertAdjacentHTML('afterbegin', header);
    document.body.insertAdjacentHTML('beforeend', footer);
});
