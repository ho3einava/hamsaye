<template>
    <navbar />
    <Hero />
    <statistics />
    <Feature />
    <leadCaptuer />
    <mediabox />
    <customerComments />
    <footerWeb />
</template>

<script>
import navbar from '../src/components/navbarWeb.vue';

import Hero from '@/components/HeroWeb.vue';
import statistics from '@/components/statisticsWeb.vue'
import Feature from '@/components/FeaturesWeb.vue'
import leadCaptuer from '@/components/leadCaptuer.vue'
import mediabox from '@/components/MediaBox.vue'
import customerComments from '@/components/customerComments.vue'
import footerWeb from '@/components/footerWeb.vue'

export default{
    components:{
       navbar,
       Hero,
       statistics,
       Feature,
       leadCaptuer,
       mediabox,
       customerComments,
       footerWeb
    }
}
</script>
