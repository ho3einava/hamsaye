<template>
    <section class="sidebar">
        <div class="user-info">
            <img :src="userInfo.imgProfile">
        <div class="username">{{ userInfo.firstname }} {{ userInfo.lastname }}</div>
        <div class="city"><i class="bi bi-geo-alt"></i>{{ userInfo.city + ' '  }} منطقه 12</div>
        <div class="user-contact">
            <div class="contact-icon"><i class="bi bi-telephone"></i></div>
            <div class="phone">{{ userInfo.phone }}</div>
        </div>
        <div class="user-contact">
            <div class="contact-icon"><i class="bi bi-envelope"></i></div>
            <div class="email">{{ userInfo.email }}</div>
        </div>
        </div>
        <div class="user-payment">
            <div class="user-payment-title">آخرین واریزی ها</div>
                    <div class="trades">
                        <div class="trade" v-for="(user , index) in userDeposit" :key="index">
                <div class="trade-icon" v-if="user.trends"><i class="bi bi-graph-up-arrow"></i></div>
                <div class="trade-icon2" v-else><i class="bi bi-graph-down-arrow"></i></div>
                <div class="trade-info">
                    <div class="trade-title">شماره#{{ user.num }}</div>
                    <div class="trade-detail">{{ user.day  + '' +  user.month + '' + user.Year + '-' + user.time + '' + user.morning }}</div>
                </div>
                <div class="trade-price">{{user.price}}</div>
                
            </div>
                    </div>
        </div>
    </section>
</template>

<script>
export default{
    props:{userInfo : Object,
        userDeposit:Object
    }

}
</script>