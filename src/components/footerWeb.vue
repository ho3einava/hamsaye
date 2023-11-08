<template>
    <section class="footer">
        <img class="footer-svg" src="/images/SVG/footer/Rectangle 13.svg">
        <img class="footer-svg2" src="/images/SVG/footer/Rectangle 12.svg">
        <div class="footer-instagram">
            <div class="footer-topic">آخرین پست های صفحه اینستاگرام ما</div>
            <div class="instagram-img">
                <div v-for="(img, index) in images" :key="index"><img :src="img"></div>

            </div>
        </div>
        <div class="services">
            <div class="service-item">
                <div class="service-title">خدمات</div>
                <li class="service-text">اجاره دهنده</li>
                <li class="service-text">اجاره گیرنده</li>
                <li class="service-text">حمل و نقل</li>
                <li class="service-text">جعبه های امن</li>
            </div>
            <div class="service-item">
                <div class="service-title">لینک های مفید</div>
                <li class="service-text">خانه</li>
                <li class="service-text">درباره ما</li>
                <li class="service-text">همکاری با ما</li>
                <li class="service-text">ثبت نام</li>
            </div>
        </div>
        <div class="footer-social">
            <div class="brand" style="padding-top: 2rem;">
                <div class="logo-text" style="width: 206px;height: 61px; gap: 0;">Hamsaye</div>
                <img class="logo" src="/images/SVG/LOGO.svg" style="width: 101px;height: 130px;">
            </div>
            <p class="social-text">ما در همسایه همیشه در خدمت شما همراهان گرامی هستیم!
                برای دانستن قوانین ما به صفحه ثبت نام مراجعه کنید</p>
                <div class="social-media">
                    <img src="/images/SVG/footer/entypo-social_linkedin-with-circle.svg" alt="linkedin">
                    <img src="/images/SVG/footer/ph_instagram-logo-fill.svg" alt="instagram">
                    <img src="/images/SVG/footer/ic_baseline-facebook.svg" alt="facebook">
                </div>
            </div>
            <div class="line"></div>
            <div class="copyright">Copyrighted &copy; 2022 Design and Idea by Hamsaye</div>
    </section>
</template>

<script setup>
const images = [
    '/images/SVG/footer/png/Rectangle 3.png',
    '/images/SVG/footer/png/Rectangle 4.png',
    '/images/SVG/footer/png/Rectangle 5.png',
    '/images/SVG/footer/png/Rectangle 6.png',
    '/images/SVG/footer/png/Rectangle 7.png',
    '/images/SVG/footer/png/Rectangle 8.png',
    '/images/SVG/footer/png/Rectangle 9.png',
    '/images/SVG/footer/png/Rectangle 10.png',
    '/images/SVG/footer/png/Rectangle 11.png',
]
</script>