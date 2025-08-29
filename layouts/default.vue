<template>
  <div class="min-h-screen bg-transparent">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>

    <div class="relative z-10 flex min-h-screen flex-col">
        <Header />

        <main class="container mx-auto flex-grow px-4 py-8">
            <NuxtPage /> 
        </main>

        <Footer />
    </div>
  </div>
</template>

<script lang="js">
import Header from '~/components/Header.vue';
import Footer from '~/components/Footer.vue';
</script>

<style>
html {
  min-height: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%) fixed;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  overflow: auto;
  scroll-behavior: smooth;
}

#stars {
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 3822px 2092px #FFF , 1542px 2151px #FFF , 1250px 3143px #FFF , 2234px 3495px #FFF , 3544px 1771px #FFF , 2661px 3658px #FFF , 2524px 2784px #FFF , 3992px 324px #FFF , 2046px 1651px #FFF , 2276px 1239px #FFF , 1670px 1128px #FFF , 2422px 2371px #FFF , 3930px 2891px #FFF , 2397px 367px #FFF , 147px 2625px #FFF , 1243px 2251px #FFF , 3702px 1246px #FFF , 2576px 2450px #FFF , 3608px 308px #FFF , 1760px 217px #FFF , 3082px 2666px #FFF , 2269px 354px #FFF , 1538px 1219px #FFF , 2731px 2392px #FFF , 3098px 2035px #FFF , 1363px 3354px #FFF , 2150px 1758px #FFF , 2882px 1486px #FFF , 1184px 3932px #FFF , 3334px 2351px #FFF , 1129px 1252px #FFF , 1813px 1802px #FFF , 2546px 3826px #FFF , 3892px 2139px #FFF , 2904px 1080px #FFF , 3110px 2090px #FFF , 2623px 102px #FFF , 1231px 2500px #FFF , 1941px 376px #FFF , 1775px 2397px #FFF , 2980px 1421px #FFF , 1416px 339px #FFF , 3984px 1137px #FFF , 3437px 2780px #FFF , 3721px 1887px #FFF , 194px 2719px #FFF , 3556px 931px #FFF , 3879px 3158px #FFF , 2349px 1975px #FFF , 2638px 3999px #FFF , 3551px 3444px #FFF , 1138px 2854px #FFF , 2751px 162px #FFF , 2229px 2291px #FFF , 1992px 3339px #FFF , 3149px 2021px #FFF , 1854px 3832px #FFF , 1372px 3678px #FFF , 2892px 159px #FFF , 3170px 3125px #FFF , 2348px 224px #FFF , 3270px 3706px #FFF , 3235px 1795px #FFF , 237px 2001px #FFF , 1941px 2712px #FFF , 2760px 2144px #FFF , 278px 3494px #FFF , 1817px 1410px #FFF , 1540px 184px #FFF , 3820px 2895px #FFF , 3996px 2094px #FFF , 3540px 3086px #FFF , 2083px 3975px #FFF , 1630px 293px #FFF , 3688px 2656px #FFF , 1236px 3002px #FFF , 2341px 1413px #FFF , 1651px 1764px #FFF , 2938px 1325px #FFF , 2655px 379px #FFF , 1832px 2938px #FFF , 397px 1597px #FFF , 2269px 3325px #FFF , 3930px 1444px #FFF , 1824px 1818px #FFF , 2181px 2729px #FFF , 1612px 1911px #FFF , 1423px 1337px #FFF , 2914px 1404px #FFF , 1924px 3399px #FFF , 3983px 2772px #FFF , 3140px 153px #FFF , 1872px 823px #FFF , 2423px 2914px #FFF , 1742px 3919px #FFF , 314px 3364px #FFF , 166px 3824px #FFF , 262px 2655px #FFF , 2799px 222px #FFF , 2968px 266px #FFF , 3222px 3544px #FFF , 1718px 2190px #FFF , 396px 2651px #FFF , 3660px 1307px #FFF , 3488px 1994px #FFF , 1289px 3381px #FFF , 161px 2100px #FFF , 384px 2551px #FFF , 2290px 1663px #FFF , 1554px 1821px #FFF , 3039px 2558px #FFF;
  animation: animStar 50s linear infinite;
}

#stars:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 1px;
  height: 1px;
  background: transparent;
  box-shadow: 3822px 2092px #FFF , 1542px 2151px #FFF , 1250px 3143px #FFF , 2234px 3495px #FFF , 3544px 1771px #FFF , 2661px 3658px #FFF , 2524px 2784px #FFF , 3992px 324px #FFF , 2046px 1651px #FFF , 2276px 1239px #FFF , 1670px 1128px #FFF , 2422px 2371px #FFF , 3930px 2891px #FFF , 2397px 367px #FFF , 147px 2625px #FFF , 1243px 2251px #FFF , 3702px 1246px #FFF , 2576px 2450px #FFF , 3608px 308px #FFF , 1760px 217px #FFF , 3082px 2666px #FFF , 2269px 354px #FFF , 1538px 1219px #FFF , 2731px 2392px #FFF , 3098px 2035px #FFF , 1363px 3354px #FFF , 2150px 1758px #FFF , 2882px 1486px #FFF , 1184px 3932px #FFF , 3334px 2351px #FFF , 1129px 1252px #FFF , 1813px 1802px #FFF , 2546px 3826px #FFF , 3892px 2139px #FFF , 2904px 1080px #FFF , 3110px 2090px #FFF , 2623px 102px #FFF , 1231px 2500px #FFF , 1941px 376px #FFF , 1775px 2397px #FFF , 2980px 1421px #FFF , 1416px 339px #FFF , 3984px 1137px #FFF , 3437px 2780px #FFF , 3721px 1887px #FFF , 194px 2719px #FFF , 3556px 931px #FFF , 3879px 3158px #FFF , 2349px 1975px #FFF , 2638px 3999px #FFF , 3551px 3444px #FFF , 1138px 2854px #FFF , 2751px 162px #FFF , 2229px 2291px #FFF , 1992px 3339px #FFF , 3149px 2021px #FFF , 1854px 3832px #FFF , 1372px 3678px #FFF , 2892px 159px #FFF , 3170px 3125px #FFF , 2348px 224px #FFF , 3270px 3706px #FFF , 3235px 1795px #FFF , 237px 2001px #FFF , 1941px 2712px #FFF , 2760px 2144px #FFF , 278px 3494px #FFF , 1817px 1410px #FFF , 1540px 184px #FFF , 3820px 2895px #FFF , 3996px 2094px #FFF , 3540px 3086px #FFF , 2083px 3975px #FFF , 1630px 293px #FFF , 3688px 2656px #FFF , 1236px 3002px #FFF , 2341px 1413px #FFF , 1651px 1764px #FFF , 2938px 1325px #FFF , 2655px 379px #FFF , 1832px 2938px #FFF , 397px 1597px #FFF , 2269px 3325px #FFF , 3930px 1444px #FFF , 1824px 1818px #FFF , 2181px 2729px #FFF , 1612px 1911px #FFF , 1423px 1337px #FFF , 2914px 1404px #FFF , 1924px 3399px #FFF , 3983px 2772px #FFF , 3140px 153px #FFF , 1872px 823px #FFF , 2423px 2914px #FFF , 1742px 3919px #FFF , 314px 3364px #FFF , 166px 3824px #FFF , 262px 2655px #FFF , 2799px 222px #FFF , 2968px 266px #FFF , 3222px 3544px #FFF , 1718px 2190px #FFF , 396px 2651px #FFF , 3660px 1307px #FFF , 3488px 1994px #FFF , 1289px 3381px #FFF , 161px 2100px #FFF , 384px 2551px #FFF , 2290px 1663px #FFF , 1554px 1821px #FFF , 3039px 2558px #FFF;
}

#stars2 {
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 3148px 1180px #FFF , 3655px 2361px #FFF , 1898px 1884px #FFF , 2071px 2738px #FFF , 1012px 2595px #FFF , 1442px 361px #FFF , 3922px 2227px #FFF , 2348px 3224px #FFF , 378px 2228px #FFF , 3914px 1939px #FFF , 1155px 1678px #FFF , 3482px 1472px #FFF , 2750px 1034px #FFF , 3745px 2080px #FFF , 2428px 3525px #FFF , 3715px 2771px #FFF , 142px 2480px #FFF , 392px 2412px #FFF , 1985px 2154px #FFF , 1227px 3341px #FFF , 2060px 250px #FFF , 1867px 1746px #FFF , 3381px 3537px #FFF , 1416px 1003px #FFF , 3461px 3959px #FFF , 2940px 3724px #FFF , 3359px 147px #FFF , 3765px 1924px #FFF , 1460px 1573px #FFF , 2391px 1402px #FFF , 2172px 2237px #FFF , 2483px 227px #FFF , 1246px 1853px #FFF , 3459px 1992px #FFF , 338px 2642px #FFF , 1629px 2332px #FFF , 3987px 3665px #FFF , 1044px 2401px #FFF , 3137px 1424px #FFF , 2788px 362px #FFF , 3547px 3647px #FFF , 208px 1261px #FFF , 1795px 394px #FFF , 3622px 1340px #FFF , 1555px 1169px #FFF , 3837px 1809px #FFF , 2748px 1148px #FFF , 179px 3181px #FFF , 3836px 1421px #FFF , 1451px 3252px #FFF , 3412px 3088px #FFF , 3931px 1289px #FFF , 316px 3345px #FFF , 1877px 3791px #FFF , 2864px 2073px #FFF , 1105px 3600px #FFF , 1181px 1114px #FFF , 3960px 1557px #FFF , 383px 3580px #FFF , 3751px 290px #FFF , 1942px 2347px #FFF , 2559px 240px #FFF , 1996px 2101px #FFF , 2305px 383px #FFF , 1207px 2288px #FFF , 1037px 1132px #FFF , 2146px 1855px #FFF , 3955px 3192px #FFF , 1718px 2655px #FFF , 1081px 2610px #FFF , 202px 1882px #FFF , 1919px 1275px #FFF , 3503px 3145px #FFF , 3691px 3833px #FFF , 2790px 3438px #FFF , 270px 1502px #FFF , 3478px 2430px #FFF , 155px 3616px #FFF , 2258px 140px #FFF , 2836px 2818px #FFF , 2357px 1976px #FFF , 3647px 142px #FFF , 1301px 1397px #FFF , 1774px 1610px #FFF , 3149px 2202px #FFF , 2884px 2680px #FFF , 1244px 1879px #FFF , 3396px 2784px #FFF , 230px 3360px #FFF , 3182px 1052px #FFF , 1024px 3424px #FFF , 2597px 1580px #FFF , 2183px 2534px #FFF , 3607px 3600px #FFF , 3258px 3400px #FFF , 3628px 2907px #FFF , 3337px 174px #FFF , 2016px 2027px #FFF , 2590px 1271px #FFF , 1128px 3954px #FFF , 2358px 3523px #FFF , 1424px 1516px #FFF;
  animation: animStar 100s linear infinite;
}

#stars2:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 2px;
  height: 2px;
  background: transparent;
  box-shadow: 3148px 1180px #FFF , 3655px 2361px #FFF , 1898px 1884px #FFF , 2071px 2738px #FFF , 1012px 2595px #FFF , 1442px 361px #FFF , 3922px 2227px #FFF , 2348px 3224px #FFF , 378px 2228px #FFF , 3914px 1939px #FFF , 1155px 1678px #FFF , 3482px 1472px #FFF , 2750px 1034px #FFF , 3745px 2080px #FFF , 2428px 3525px #FFF , 3715px 2771px #FFF , 142px 2480px #FFF , 392px 2412px #FFF , 1985px 2154px #FFF , 1227px 3341px #FFF , 2060px 250px #FFF , 1867px 1746px #FFF , 3381px 3537px #FFF , 1416px 1003px #FFF , 3461px 3959px #FFF , 2940px 3724px #FFF , 3359px 147px #FFF , 3765px 1924px #FFF , 1460px 1573px #FFF , 2391px 1402px #FFF , 2172px 2237px #FFF , 2483px 227px #FFF , 1246px 1853px #FFF , 3459px 1992px #FFF , 338px 2642px #FFF , 1629px 2332px #FFF , 3987px 3665px #FFF , 1044px 2401px #FFF , 3137px 1424px #FFF , 2788px 362px #FFF , 3547px 3647px #FFF , 208px 1261px #FFF , 1795px 394px #FFF , 3622px 1340px #FFF , 1555px 1169px #FFF , 3837px 1809px #FFF , 2748px 1148px #FFF , 179px 3181px #FFF , 3836px 1421px #FFF , 1451px 3252px #FFF , 3412px 3088px #FFF , 3931px 1289px #FFF , 316px 3345px #FFF , 1877px 3791px #FFF , 2864px 2073px #FFF , 1105px 3600px #FFF , 1181px 1114px #FFF , 3960px 1557px #FFF , 383px 3580px #FFF , 3751px 290px #FFF , 1942px 2347px #FFF , 2559px 240px #FFF , 1996px 2101px #FFF , 2305px 383px #FFF , 1207px 2288px #FFF , 1037px 1132px #FFF , 2146px 1855px #FFF , 3955px 3192px #FFF , 1718px 2655px #FFF , 1081px 2610px #FFF , 202px 1882px #FFF , 1919px 1275px #FFF , 3503px 3145px #FFF , 3691px 3833px #FFF , 2790px 3438px #FFF , 270px 1502px #FFF , 3478px 2430px #FFF , 155px 3616px #FFF , 2258px 140px #FFF , 2836px 2818px #FFF , 2357px 1976px #FFF , 3647px 142px #FFF , 1301px 1397px #FFF , 1774px 1610px #FFF , 3149px 2202px #FFF , 2884px 2680px #FFF , 1244px 1879px #FFF , 3396px 2784px #FFF , 230px 3360px #FFF , 3182px 1052px #FFF , 1024px 3424px #FFF , 2597px 1580px #FFF , 2183px 2534px #FFF , 3607px 3600px #FFF , 3258px 3400px #FFF , 3628px 2907px #FFF , 3337px 174px #FFF , 2016px 2027px #FFF , 2590px 1271px #FFF , 1128px 3954px #FFF , 2358px 3523px #FFF , 1424px 1516px #FFF;
}

#stars3 {
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1792px 2082px #FFF , 2008px 3407px #FFF , 397px 346px #FFF , 3026px 1767px #FFF , 2644px 2164px #FFF , 1627px 1203px #FFF , 3937px 2607px #FFF , 1048px 2066px #FFF , 3230px 2366px #FFF , 2561px 246px #FFF , 2310px 2400px #FFF , 1531px 2682px #FFF , 145px 3930px #FFF , 1676px 3942px #FFF , 3491px 182px #FFF , 3259px 3008px #FFF , 2227px 212px #FFF , 2207px 2215px #FFF , 3279px 3814px #FFF , 1284px 1400px #FFF , 1808px 2567px #FFF , 2134px 2905px #FFF , 1604px 1491px #FFF , 240px 3848px #FFF , 1223px 2137px #FFF , 2802px 3546px #FFF , 3422px 1124px #FFF , 3357px 2250px #FFF , 1456px 3795px #FFF , 1867px 2108px #FFF , 254px 1874px #FFF , 2349px 3780px #FFF , 1476px 1399px #FFF , 110px 1511px #FFF , 360px 1421px #FFF , 3125px 313px #FFF , 3705px 352px #FFF , 2259px 3828px #FFF , 3078px 2331px #FFF , 3692px 2439px #FFF , 1372px 1212px #FFF , 3434px 1331px #FFF , 1342px 1620px #FFF , 1611px 1468px #FFF , 2177px 2552px #FFF , 3660px 2991px #FFF , 3326px 2221px #FFF , 1677px 334px #FFF , 3973px 1698px #FFF , 1594px 1390px #FFF , 1982px 2811px #FFF , 2830px 1958px #FFF , 1954px 281px #FFF , 2334px 1096px #FFF , 3869px 3212px #FFF , 2059px 3748px #FFF , 1906px 1222px #FFF , 1329px 1848px #FFF , 2187px 2619px #FFF , 2700px 3649px #FFF , 2739px 1878px #FFF , 3456px 112px #FFF , 142px 3469px #FFF , 3990px 1230px #FFF , 176px 3758px #FFF , 180px 1807px #FFF , 1708px 2568px #FFF , 1531px 3932px #FFF , 3638px 3656px #FFF , 351px 2565px #FFF , 3971px 213px #FFF , 1397px 1121px #FFF , 3685px 2231px #FFF , 3712px 1580px #FFF , 158px 2968px #FFF , 2386px 2704px #FFF , 2051px 3250px #FFF , 1422px 2281px #FFF , 3562px 1542px #FFF , 142px 2061px #FFF , 2483px 2832px #FFF , 393px 3008px #FFF , 1083px 2497px #FFF , 337px 3995px #FFF , 3551px 1065px #FFF , 3252px 3682px #FFF , 2296px 1040px #FFF , 3905px 2478px #FFF , 196px 1315px #FFF , 3254px 2888px #FFF , 3682px 3981px #FFF , 293px 3744px #FFF , 3827px 1970px #FFF , 320px 2262px #FFF , 2601px 239px #FFF , 3882px 175px #FFF , 2726px 1917px #FFF , 1226px 1191px #FFF , 3038px 3575px #FFF , 299px 3407px #FFF , 1560px 2350px #FFF;
  animation: animStar 150s linear infinite;
}

#stars3:after {
  content: " ";
  position: absolute;
  top: 2000px;
  width: 3px;
  height: 3px;
  background: transparent;
  box-shadow: 1792px 2082px #FFF , 2008px 3407px #FFF , 397px 346px #FFF , 3026px 1767px #FFF , 2644px 2164px #FFF , 1627px 1203px #FFF , 3937px 2607px #FFF , 1048px 2066px #FFF , 3230px 2366px #FFF , 2561px 246px #FFF , 2310px 2400px #FFF , 1531px 2682px #FFF , 145px 3930px #FFF , 1676px 3942px #FFF , 3491px 182px #FFF , 3259px 3008px #FFF , 2227px 212px #FFF , 2207px 2215px #FFF , 3279px 3814px #FFF , 1284px 1400px #FFF , 1808px 2567px #FFF , 2134px 2905px #FFF , 1604px 1491px #FFF , 240px 3848px #FFF , 1223px 2137px #FFF , 2802px 3546px #FFF , 3422px 1124px #FFF , 3357px 2250px #FFF , 1456px 3795px #FFF , 1867px 2108px #FFF , 254px 1874px #FFF , 2349px 3780px #FFF , 1476px 1399px #FFF , 110px 1511px #FFF , 360px 1421px #FFF , 3125px 313px #FFF , 3705px 352px #FFF , 2259px 3828px #FFF , 3078px 2331px #FFF , 3692px 2439px #FFF , 1372px 1212px #FFF , 3434px 1331px #FFF , 1342px 1620px #FFF , 1611px 1468px #FFF , 2177px 2552px #FFF , 3660px 2991px #FFF , 3326px 2221px #FFF , 1677px 334px #FFF , 3973px 1698px #FFF , 1594px 1390px #FFF , 1982px 2811px #FFF , 2830px 1958px #FFF , 1954px 281px #FFF , 2334px 1096px #FFF , 3869px 3212px #FFF , 2059px 3748px #FFF , 1906px 1222px #FFF , 1329px 1848px #FFF , 2187px 2619px #FFF , 2700px 3649px #FFF , 2739px 1878px #FFF , 3456px 112px #FFF , 142px 3469px #FFF , 3990px 1230px #FFF , 176px 3758px #FFF , 180px 1807px #FFF , 1708px 2568px #FFF , 1531px 3932px #FFF , 3638px 3656px #FFF , 351px 2565px #FFF , 3971px 213px #FFF , 1397px 1121px #FFF , 3685px 2231px #FFF , 3712px 1580px #FFF , 158px 2968px #FFF , 2386px 2704px #FFF , 2051px 3250px #FFF , 1422px 2281px #FFF , 3562px 1542px #FFF , 142px 2061px #FFF , 2483px 2832px #FFF , 393px 3008px #FFF , 1083px 2497px #FFF , 337px 3995px #FFF , 3551px 1065px #FFF , 3252px 3682px #FFF , 2296px 1040px #FFF , 3905px 2478px #FFF , 196px 1315px #FFF , 3254px 2888px #FFF , 3682px 3981px #FFF , 293px 3744px #FFF , 3827px 1970px #FFF , 320px 2262px #FFF , 2601px 239px #FFF , 3882px 175px #FFF , 2726px 1917px #FFF , 1226px 1191px #FFF , 3038px 3575px #FFF , 299px 3407px #FFF , 1560px 2350px #FFF;
}

@keyframes animStar {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(-2000px);
  }
}
</style>