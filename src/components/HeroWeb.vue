<template>
    <section class="Hero">
        <img src="/images/SVG/Hero/Vector.svg" class="hero-background">
        <div class="hero-info">
            <div class="hero-topic">همین الان</div>
            <div class="hero-text">با فضای خالی کسب درآمد کن💰 </div>
            <div class="hero-text">یا</div>
            <div class="hero-text">برای وسیله اضافه فضای خالی پیدا کن🤝</div>
            <div class="hero-form">

                <div class="hero-input" :style="{ 'background-image': 'url(' + imageUrl + ')' }">
                <input class="hero-textinput" type="text" placeholder="شماره تلفن خود را وارد کنید">
                <div class="hero-btn-img" :style="{ 'background-image': 'url(' + btnImg + ')' }">
                <button class="hero-btn">ثبت نام</button>
                </div>
                </div>
            </div>
                
            
        </div>
        <div class="hero-box">
            <img :src="RiyalCoin" class="Riyal-Coin" style="top: -1.5rem; right: 13rem;">
            <img :src="RiyalCoin" class="Riyal-Coin" style="top: 0.75rem; right: -0.25rem;">
            <img :src="RiyalCoin" class="Riyal-Coin" style="top: -0.75rem; left: 5.5rem;">
            <img :src="RiyalCoin" class="Riyal-Coin" style="top: 11.75rem; left: 1rem;">
            <img :src="RiyalCoin" class="Riyal-Coin" style="bottom: 3.75rem; left: 1rem;">
            <img :src="RiyalCoin" class="Riyal-Coin" style="bottom: -0.5rem; left: 10rem;">
            <img :src="RiyalCoin" class="Riyal-Coin" style="bottom: 2rem; right: 13rem; z-index: 0;">
            <img :src="RiyalCoin" class="Riyal-Coin" style="bottom: 2.75rem; right: 4.5rem; z-index: 0;">
            <img :src="RiyalCoinGold" class="Riyal-Coin" style="bottom: 17rem; right: 1.5rem; z-index: 0;">
            <img :src="RiyalCoinGold" class="Riyal-Coin" style="bottom: 8rem; left: 4.5rem; z-index: 0;">
            <img :src="RiyalCoinGold" class="Riyal-Coin" style="top: 5rem; left: 4.25rem; z-index: 0;">
            <img class="hero-img" src="/images/SVG/Hero/Box.svg">
        </div>
    </section>
</template>

<script>
export default {
  data() {
    return {
      imageUrl: '/images/SVG/Hero/Vector2.svg',
      btnImg: '/images/SVG/Hero/Vector3.svg',
      RiyalCoin:'/images/SVG/Hero/Riyal-Coin.svg',
      RiyalCoinGold:'/images/SVG/Hero/RiyalCoin-Gold.svg'
    };
  }
};
</script>