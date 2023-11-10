<template>
    <section class="user-details">
        <div class="chart-title">اطلاعات نگهدارنده ها</div> 
        <div class="user-items">
            <div v-for="(user , index) in userDetails" :key="index" class="user-item">
                <div class="user-box">
                    <img class="user-img" :src="user.img">
                <div class="user-name">{{ user.name }}</div>
                </div>
                <div class="email-box">
                    <div class="contact-icon"><i class="bi bi-envelope"></i></div>
                    <div class="email-name">
                        <div class="email-title">پست الکترونیک</div>
                        <div class="email2">{{ user.email }}</div>
                    </div>

                </div>
                <div class="phone-box">
                    <div class="contact-icon2"><i class="bi bi-telephone"></i></div>
                    <div class="phone-name">
                        <div class="email-title">تلفن همراه</div>
                        <div class="phone2">{{ user.phone }}</div>
                    </div>

                </div>
                <div class="city"><i class="bi bi-geo-alt"></i> تهران،منطقه {{ user.citycode }}</div>
                <div class="more">...</div>
            </div>
        </div>
         <div class="page">
            <div class="page-text">نشان دادن<span> 3-1</span> از <span>100</span> محتوا</div>
            <div class="pagination">
                <img class="arrow" src="/images/Dashboard/dropdown.svg">
                <div id="page" class="pagination-num">1</div>
                <div class="pagination-num">2</div>
                <div class="pagination-num">3</div>
                <img class="arrow" src="/images/Dashboard/dropdown (1).svg">
            </div>
         </div>
    </section>
    
</template>

<script setup>
  const userDetails = [

{
        img : '/images/Dashboard/userDetails/unsplash_X2YO8KFxgEM.png',
        name: 'علیرضا زارع',
        email : 'alireza.za@gmail.com',
        phone : '0912-3456789',
        citycode : '14',
        

        
},
{
        img : '/images/Dashboard/userDetails/image 4.png',
        name: 'حسین شمس',
        email : 'hossein.sha@gmail.com',
        phone : '0938-3657689',
        citycode : '8',
        

        
},
{
        img : '/images/Dashboard/userDetails/unsplash_kVg2DQTAK7c.png',
        name: 'علی محمدی',
        email : 'ali.mhmdi@yahoo.com',
        phone : '0912-6578365',
        citycode : '2',
        

        
},
]
</script>