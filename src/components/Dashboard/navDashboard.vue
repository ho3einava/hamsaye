<template>
    <section class="nav-dashboard">
        <div class="profile-nav">
            <img :src="userInfo.imgProfile" class="img-profile">
            <div class="icon"><i class="bi bi-gear"></i></div> 
            <div class="icon"><i class="bi bi-bell"></i><span class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle"></span></div>
            

        </div>
        <div class="line"></div>
        <div class="nav-dashbord-item">
            <div class="icon"><i class="bi bi-coin"></i></div> 
            <div class="icon"><i class="bi bi-repeat"></i></div> 
            <div class="icon"><img src="/images/Dashboard/navbar/Flow.svg" alt=""></div> 
            <RouterLink to="/dashboard" class="icon"><i class="bi bi-person"></i></RouterLink> 
            <div class="icon"><i class="bi bi-file-earmark"></i></div> 
            <div class="icon"><img src="/images/Dashboard/navbar/Group.svg"></div> 
            <div class="icon"><img src="/images/Dashboard/navbar/trending.svg"></div> 
            <div class="icon"><i class="bi bi-globe2"></i></div>                    
        </div>
        <div class="search-box">
            <div class="search-img"><i class="bi bi-search"></i></div> 
            <input class="search-input" type="text" placeholder="جستجو"/>
        </div>
        <RouterLink to="/" class="home-icon"><img  src="/images/Dashboard/navbar/Hamsaye-1 (6) 1.svg"></RouterLink>
    </section>
</template>


<script>
export default{
props:{
    userInfo: Object
}
}
</script>