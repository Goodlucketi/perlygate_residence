<script setup>
  
    import { ref } from 'vue'

    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { faFacebook } from '@fortawesome/free-brands-svg-icons/faFacebook';
    import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
    import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
    import { faWhatsapp } from '@fortawesome/free-brands-svg-icons/faWhatsapp';

</script>

<template>
    <main class="mt-10 md:mt-20 relative">
        <div class="contact-container mx-auto">
            <div class="bg-slate-200 p-10">
                <h2 class="text-center text-4xl md:text-5xl font-sans tracking-widest text-cyan-950">CONTACT US</h2>
                <hr class="mt-5">
            </div>
            <div class="location md:flex md:justify-center md:items-start gap-10 py-16 px-10 bg-slate-100/75">
                <div class="location md:w-5/12">
                    <div class="address mb-10">
                        <p class="p-1 font-bold text-slate-500 text-xl">PERLY GATE RESIDENCE</p>
                        <div class="my-2">
                            <p class="p-1 font-bold text-slate-600 text-lg">Address</p>
                            <p class="p-1"><a href="https://maps.google.com/maps/dir//Perly+Gate+Residence+120+Calabar+Itu+Hwy+Uyo+520101,+Akwa+Ibom/@5.0571209,7.9090272,16z/data=!4m5!4m4!1m0!1m2!1m1!1s0x105d577ad2c61da3:0x35de29cdcd1a2bb1" class="hover:underline"> 120 Calabar Itu Highway, Uyo, Akwa Ibom State, 520101, Nigeria</a></p>    
                        </div>
                        <div class="my-2">
                            <p class="p-1 font-bold text-slate-600 text-lg">Telephone</p>
                            <p class="p-1"><a href="tel:+23470876680366" class="hover:underline">+23470876680366</a></p>
                        </div>
                        <div class="my-2">
                            <p class="p-1 font-bold text-slate-600 text-lg">Email</p>
                            <p class="p-1"><a href="mailto:reservations@perlygateresidence.com" class="hover:underline"> reservations@perlygateresidence.com</a></p>
                        </div>
                        
                    </div>

                    <div class="social my-10">  
                        <p class="p-2 font-bold text-slate-700 text-lg">Follow us on:</p>  
                        <a href="https://www.facebook.com/perlygateresidence?mibextid=ZbWKwL" class="p-1 text-cyan-950 text-xl"><FontAwesomeIcon :icon='faFacebook'/></a>
                        <!-- <a href="" class="p-1 mx-2 md:mx-4 text-cyan-950 text-xl"><FontAwesomeIcon :icon='faTwitter'/></a> -->
                        <a href="https://www.instagram.com/perlygateresidence?igsh=YzljYTk1ODg3Zg==" class="p-1 mx-2 md:mx-4 text-cyan-950 text-xl"><FontAwesomeIcon :icon='faInstagram'/></a>
                        <a href="https://wa.me/2347086680366" class="p-1 mx-2 md:mx-4 text-cyan-950 text-xl"><FontAwesomeIcon :icon='faWhatsapp'/></a>
                    </div>
                </div>
                <div class="contact-form md:w-5/12">
                    <h2 class="font-bold text-2xl text-slate-600">Contact Us</h2>
                    <form class="contact-form">
                        <div>
                            <input type="text" name="name" id="name" placeholder="Your Name" class="p-3 my-3 border rounded w-full">
                        </div>

                        <div>
                            <input type="text" name="phone" id="phone" placeholder="Your Phone Number" class="p-3 my-3 border rounded w-full">
                        </div>

                        <div>
                            <input type="email" name="email" id="email" placeholder="Your Email Address" class="p-3 my-3 border rounded w-full">
                        </div>

                        <div>
                            <textarea name="message" id="mesage" placeholder="Type Message Here" class="border w-full p-3 rounded my-3"></textarea>
                        </div>

                        <div>
                            <input type="submit" value="Send Enquiry" id="submit" class="p-3 bg-orange-600 text-white rounded-3xl my-3">
                        </div>
                    </form>
                </div>
            </div>

            <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3974.287174946338!2d7.906446908147893!3d5.057126238448417!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x105d577ad2c61da3%3A0x35de29cdcd1a2bb1!2sPerly%20Gate%20Residence!5e0!3m2!1sen!2sng!4v1716981503218!5m2!1sen!2sng" width="100%" height="400" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" class="mx-auto"></iframe>
            </div>
        </div>
    </main>
</template>

<style scoped>
    .contact-container{
        background: linear-gradient(rgba(222, 240, 250, 0.747), rgba(234, 243, 253, 0.788)), url('../../assets/pearlygates/hotel_144.webp') no-repeat;
        background-size: cover;
    }
</style>