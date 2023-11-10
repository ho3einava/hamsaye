<template>
    <section class="dashboard">
        <div class="wellcome-msg">سلام{{ ' ' + userInfo.firstname + ' ' }}عزیز!</div>
        <div class="group-chart">
            <div class="chart">
                <chart style="width: 65%;" />
                <div class="line-border"></div>
                <chartCircleWeb style="width: 30%;" />
            </div>
            <div class="chart2">
                  <chartRadarWeb />
            </div>
        </div>
        <div class="group-chart">
            <div class="chart">
                <UserDetails />
            </div>
            <div class="chart2">
                <chartlevel2 style="width: 90% ; height: 250px;"/>
                  <chartlevel style="width: 90% ; height: 250px;"  />
            </div>
        </div>

    </section>
</template>

<script>
import chart from '@/components/Dashboard/chartWeb.vue'
import chartCircleWeb from './chartCircleWeb.vue'
import  chartRadarWeb from './chartRadarWeb.vue'

import UserDetails from './userDetails.vue'
import chartlevel from './chartLevel.vue'
import chartlevel2 from './chartLevel2.vue'


export default {
    props: {
        userInfo: Object
    },
    components: {
    chart,
    chartCircleWeb,
    chartRadarWeb,
    
    UserDetails,
    chartlevel,
    chartlevel2
}
}
</script>