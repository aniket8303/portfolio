import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

# Make the 3D effect pop more
content = content.replace('data-tilt-max="5"', 'data-tilt-max="15"')
content = content.replace('data-tilt-max-glare="0.1"', 'data-tilt-max-glare="0.3"')

# Update Address to be clickable (Google Maps)
old_address = '''<div class="col-md-6 d-flex align-items-stretch mb-4">
          <div class="contact-card" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.3">
            <div class="icon-circle">
              <i class="bx bx-map"></i>
            </div>
            <div class="info-content">
              <h3>My Home Address</h3>
              <p>At Post. Chopadi, Tal. Sangola,<br>Dist. Solapur, Maharashtra<br>India 413308</p>
            </div>
          </div>
        </div>'''

new_address = '''<div class="col-md-6 d-flex align-items-stretch mb-4">
          <a href="https://maps.google.com/?q=At+Post+Chopadi+Sangola+Solapur+Maharashtra+413308" target="_blank" class="contact-card" style="text-decoration: none; color: inherit;" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.3">
            <div class="icon-circle">
              <i class="bx bx-map"></i>
            </div>
            <div class="info-content">
              <h3>My Home Address</h3>
              <p>At Post. Chopadi, Tal. Sangola,<br>Dist. Solapur, Maharashtra<br>India 413308</p>
            </div>
          </a>
        </div>'''

content = content.replace(old_address, new_address)

# Update Email to be clickable
old_email = '''<div class="col-md-6 d-flex align-items-stretch mb-4">
          <div class="contact-card" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.3">
            <div class="icon-circle">
              <i class="bx bx-envelope"></i>
            </div>
            <div class="info-content">
              <h3>Email</h3>
              <p>parekaraniket25@gmail.com</p>
              <p>aniketparekar86@gmail.com</p>
            </div>
          </div>
        </div>'''

new_email = '''<div class="col-md-6 d-flex align-items-stretch mb-4">
          <a href="mailto:parekaraniket25@gmail.com" class="contact-card" style="text-decoration: none; color: inherit;" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.3">
            <div class="icon-circle">
              <i class="bx bx-envelope"></i>
            </div>
            <div class="info-content">
              <h3>Email</h3>
              <p>parekaraniket25@gmail.com</p>
              <p>aniketparekar86@gmail.com</p>
            </div>
          </a>
        </div>'''

content = content.replace(old_email, new_email)

# Update Contact/Phone to be clickable
old_phone = '''<div class="col-md-6 d-flex align-items-stretch mb-4">
          <div class="contact-card" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.3">
            <div class="icon-circle">
              <i class="bx bx-phone-call"></i>
            </div>
            <div class="info-content">
              <h3>Contact</h3>
              <p>+91 8668943955</p>
            </div>
          </div>
        </div>'''

new_phone = '''<div class="col-md-6 d-flex align-items-stretch mb-4">
          <a href="tel:+918668943955" class="contact-card" style="text-decoration: none; color: inherit;" data-tilt data-tilt-max="15" data-tilt-speed="400" data-tilt-glare="true" data-tilt-max-glare="0.3">
            <div class="icon-circle">
              <i class="bx bx-phone-call"></i>
            </div>
            <div class="info-content">
              <h3>Contact</h3>
              <p>+91 8668943955</p>
            </div>
          </a>
        </div>'''

content = content.replace(old_phone, new_phone)

# Make 3D effects stronger
old_icon_css = '''transform: translateZ(20px);'''
new_icon_css = '''transform: translateZ(40px);'''
content = content.replace(old_icon_css, new_icon_css)

old_info_css = '''transform: translateZ(30px);'''
new_info_css = '''transform: translateZ(50px);'''
content = content.replace(old_info_css, new_info_css)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print("Done")
