
        <script setup>
           import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

           import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
           import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
           import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
           import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';
        
        </script>
        
        <template>
            <footer class="relative bg-cyan-950 text-white">
                <div class="footer-container text-sm p-4 md:p-10 md:flex md:justify-between">
                    <div class="address p-2 md:w-4/12 md:p-4">
                        <p class="p-1 font-bold text-lg">PERLY GATE RESIDENCE</p> 
                        <p class="p-1">120 Calabar Itu Highway, Uyo, Akwa Ibom State, 520101, Nigeria</p>    
                        <p class="p-1">T +23470876680366</p>
                        <p class="p-1">E reservations@perlygateresidence.com</p>
                    </div>

                    <div class="links p-2 md:w-4/12 md:p-4">
                        <li class="md:pl-28 my-2 list-none transition-all duration-1000 hover:underline"><router-link to="/">HOME</router-link></li>
                        <li class="md:pl-28 my-2 list-none transition-all duration-1000 hover:underline"><router-link to="/rooms">ROOMS</router-link></li>
                        <li class="md:pl-28 my-2 list-none transition-all duration-1000 hover:underline"><router-link to="/gallery">GALLERY</router-link></li>
                        <li class="md:pl-28 my-2 list-none transition-all duration-1000 hover:underline"><router-link to="/about-us">ABOUT US</router-link></li>
                        <li class="md:pl-28 my-2 list-none transition-all duration-1000 hover:underline"><router-link to="/contact">CONTACT US</router-link></li>
                        
                    </div>
                    <div class="social-newsletter md:text-center p-2 md:w-4/12 md:p-4">
                        <div class="social">
                            
                            <a href="https://www.facebook.com/perlygateresidence?mibextid=ZbWKwL" class="mx-2 text-xl"><FontAwesomeIcon :icon='faFacebook'/></a>
                            <!-- <a href="" class="mx-2 text-xl"><FontAwesomeIcon :icon='faTwitter'/></a> -->
                            <a href="https://www.instagram.com/perlygateresidence?igsh=YzljYTk1ODg3Zg==" class="mx-2 text-xl"><FontAwesomeIcon :icon='faInstagram'/></a>
                            <a href="https://wa.me/2347086680366" class="mx-2 text-xl"><FontAwesomeIcon :icon='faWhatsapp'/></a>
                        </div>
                        <div class="newsletter">
                            <p class="mt-8">Subscribe to our Newsletter</p>
                            <form class="newsletter">
                                <input type="email" name="newsletter-email" id="newsletter-email" placeholder="Email" class="p-3 rounded-l w-8/12">
                                <input type="submit" value="Submit" class="p-3 bg-orange-600 text-white rounded-r w-3/12">
                            </form>
                        </div>
                    </div>
                </div>
                <div class="mx-auto h-0.5 bg-slate-700 mb-5"></div>
                <p class="text-center">&copy; 2024 All rights reserved</p>
            </footer>
        </template>
        
        <style scoped>
          
           
        </style>