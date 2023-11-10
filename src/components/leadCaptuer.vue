<template>
    <section class="leadcaptuer">
        <div class="lead-item">
            <div class="lead-background">
                <img class="lead-img" src="/images/SVG/leadcaptuer/digital-service2 1.svg">
                <div class="chart-user">
                    <chartUsersWebVue />
                </div>
            </div>
        </div>
        <div class="lead-item2">
            <div class="lead-title"> پلتفرم همسایه چالش های شما را آسان می کند</div>
            <p class="lead-text"> همسایه بهترین راهکار های ممکن را برای شما در از بین بردن چالش هایتان در پر کردن و زیبا
                سازی خانه تان پیشنهاد می دهد. </p>
            <button class="lead-btn">شروع کنید</button>
        </div>

    </section>
</template>

<script>
    import chartUsersWebVue from './Dashboard/chartUsersWeb.vue';
export default {
    components: {
        chartUsersWebVue
    }

}
</script>