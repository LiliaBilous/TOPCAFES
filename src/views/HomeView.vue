<template>
  <main>
    <div class="main-photo-wrap">
      <div class="main-box-img">
        <h1 class="main-heading">Top cafes Ukraine</h1>
        <p class="sub">За суб'єктивною думкою автора станом на 2023 рік</p>
      </div>
    </div>
    <div class="introduction-block">
      <h2 class="introduction-header">Топ кав'ярень України</h2>
      <p class="introduction-text-wrap">
        
      </p>
      <p>Lets get started!</p>
    </div>
    <div class="city__wrapper wrapper wrapper-reverse">
      <div class="city__text-block">
        <p class="city-description">
          Так склалось, що я люблю і подорожувати в тому числі нашою рідною Україною. Тож
          для зручності за посиланням нижче зібрані міста, які я відвідувала, і в яких
          знайшла круті локації ознайомитись з якими можна вибравши певне місто яке
          цікавить вас у першу чергу. Звісно, я не відвідала навіть всі обласні центри
          України і в планах на майбутнє доповнювати і перелік міст, і перелік цікавих
          локацій у них...звісно ж що я скрізь буду шукати каву і залишати тут локації що
          завоювали
        </p>
        <div class="button-wrapper">
          <RouterLink to="/cities" class="button"> Перейти до огляду міст </RouterLink>
        </div>
      </div>
      <div class="photo-img-block">
        <div class="coffee-img"></div>
      </div>
    </div>
    <div class="cafes__wrapper wrapper">
      <div class="cafes__text-block">
        <p class="cafes-description">
          ...сортування по кавярням, за посиланням нижче знаходиться сторінка з фільтрами
          для всіх кавярень що представленні на цьому сайті
        </p>
        <div class="button-wrapper">
          <RouterLink to="/cafes" class="dark-button button"
            >Перейти до огляду кавярень</RouterLink
          >
        </div>
      </div>
      <div class="photo-img-block">
        <div class="cafes-img"></div>
      </div>
    </div>
  </main>
</template>
