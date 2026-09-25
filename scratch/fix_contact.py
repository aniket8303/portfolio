import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

new_contact_section = '''  <section id="contacts" class="contact">
    <div class="container">

      <div class="section-title">
        <h2>Contact</h2>
      </div>

      <div class="row mt-2 contact-grid">
        <style>
          .contact-grid {
            display: flex;
            flex-wrap: wrap;
            align-items: stretch;
            gap: 0;
          }

          .contact-card {
            width: 100%;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: flex-start;
            text-align: left;
            padding: 35px 30px;
            gap: 20px;
            background: var(--bg-color-glass);
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            border: 1px solid var(--glass-border);
            border-radius: 12px;
            height: 100%;
            transform-style: preserve-3d;
            transition: all 0.3s ease;
          }

          .contact-card:hover {
            border-color: var(--accent-color);
            box-shadow: 0 10px 30px rgba(18, 214, 64, 0.1);
          }

          .icon-circle {
            width: 50px;
            height: 50px;
            min-width: 50px;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 24px;
            color: var(--text-primary);
            transform: translateZ(20px);
            transition: all 0.3s ease;
          }
          
          .contact-card:hover .icon-circle {
            background: rgba(18, 214, 64, 0.1);
            color: var(--accent-color);
          }

          .info-content {
            display: flex;
            flex-direction: column;
            transform: translateZ(30px);
          }

          .info-content h3 {
            font-size: 20px;
            font-weight: 600;
            color: var(--accent-color);
            margin-bottom: 10px;
            margin-top: 0;
          }

          .info-content p {
            font-size: 14px;
            color: var(--text-secondary);
            margin-bottom: 5px;
            line-height: 1.6;
          }
          
          .info-content p:last-child {
            margin-bottom: 0;
          }

          .social-links-row {
            display: flex;
            gap: 12px;
            margin-top: 10px;
          }

          .social-link-circle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.08);
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--text-primary);
            font-size: 20px;
            text-decoration: none;
            transition: all 0.3s ease;
          }

          .social-link-circle:hover {
            background: var(--accent-color);
            color: #000;
            transform: translateY(-3px);
            text-decoration: none;
          }
        </style>

        <div class="col-md-6 d-flex align-items-stretch mb-4">
          <div class="contact-card" data-tilt data-tilt-max="5" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.1">
            <div class="icon-circle">
              <i class="bx bx-map"></i>
            </div>
            <div class="info-content">
              <h3>My Home Address</h3>
              <p>At Post. Chopadi, Tal. Sangola,<br>Dist. Solapur, Maharashtra<br>India 413308</p>
            </div>
          </div>
        </div>

        <div class="col-md-6 d-flex align-items-stretch mb-4">
          <div class="contact-card" data-tilt data-tilt-max="5" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.1">
            <div class="icon-circle">
              <i class="bx bx-share-alt"></i>
            </div>
            <div class="info-content">
              <h3>Social Profiles</h3>
              <div class="social-links-row">
                <a href="https://www.linkedin.com/in/aniket8303/" target="_blank" class="social-link-circle"><i class="bx bxl-linkedin"></i></a>
                <a href="https://github.com/aniket8303" target="_blank" class="social-link-circle"><i class="bx bxl-github"></i></a>
                <a href="https://www.instagram.com/aniketparekar07/" target="_blank" class="social-link-circle"><i class="bx bxl-instagram"></i></a>
                <a href="https://x.com/AniketParekar1" target="_blank" class="social-link-circle"><i class="bx bxl-twitter"></i></a>
              </div>
            </div>
          </div>
        </div>

        <div class="col-md-6 d-flex align-items-stretch mb-4">
          <div class="contact-card" data-tilt data-tilt-max="5" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.1">
            <div class="icon-circle">
              <i class="bx bx-envelope"></i>
            </div>
            <div class="info-content">
              <h3>Email</h3>
              <p>parekaraniket25@gmail.com</p>
              <p>aniketparekar86@gmail.com</p>
            </div>
          </div>
        </div>
        
        <div class="col-md-6 d-flex align-items-stretch mb-4">
          <div class="contact-card" data-tilt data-tilt-max="5" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.1">
            <div class="icon-circle">
              <i class="bx bx-phone-call"></i>
            </div>
            <div class="info-content">
              <h3>Contact</h3>
              <p>+91 8668943955</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>'''

# Replace the old section
import re
pattern = re.compile(r'<section id="contacts" class="contact">.*?</section>', re.DOTALL)
new_content = pattern.sub(new_contact_section, content)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(new_content)
    
print("Replaced Contacts successfully.")
