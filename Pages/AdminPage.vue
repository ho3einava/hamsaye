<template>
    <navbar :userInfo="userinfo" />
    <div class="main-dashboard">

        <sidebar :userInfo="userinfo" :userDeposit = "userDeposit"/>
        <dashboard :userInfo="userinfo" />
    </div>
</template>

<script>
import navbar from '@/components/Dashboard/navDashboard.vue'
import sidebar from '@/components/Dashboard/sidebarWeb.vue'
import dashboard from '@/components/Dashboard/dashboardMain.vue'
export default{
components:{
    navbar,
    sidebar,
    dashboard

},
setup(){
    const userinfo = {
        imgProfile : '/images/Dashboard/navbar/unsplash_3TLl_97HNJo.svg',
        firstname : 'زهرا',
        lastname : 'محمدی',
        city:'تهران',
        phone: '0912-3456789',
        email: 'email@gmail.com'
    }
    const userDeposit = [

    {
            num : 31313,
            price: '150,000',
            day : 13,
            month : 'آذر',
            Year : '1401',
            time : '12:35',
            morning : 'شب',
            trends : true

            
    },
    {
            num : 31313,
            price: '350,000',
            day : 3,
            month : 'آذر',
            Year : '1401',
            time : '07:31',
            morning : 'صبح',
            trends : true

            
    },
    {
            num : 62343,
            price: '900,000',
            day : 13,
            month : 'شهریور',
            Year : '1401',
            time : '19:23',
            morning : 'شب',
            trends : false

            
    },
    {
            num : 25327,
            price: '180,000',
            day : 13,
            month : 'شهریور',
            Year : '1401',
            time : '19:23',
            morning : 'شب',
            trends : true

            
    },
    {
            num : 23453,
            price: '568,000',
            day : 13,
            month : 'فروردین',
            Year : '1401',
            time : '12:35',
            morning : 'شب',
            trends: false

            
    },

    ]
     
return {userinfo ,userDeposit}
}

}
</script>