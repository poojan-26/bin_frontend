import React from 'react';
import './header.css';


export default function Header() {
  return (
    <div className="header">
      <div className="logo-container">
        <a href="https://www.binblasters.com">
        <svg width="198" height="76" viewBox="0 0 198 76" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M115.455 31.9727C115.459 32.0515 115.459 32.1305 115.455 32.2093H115.561C115.533 32.1271 115.498 32.0478 115.455 31.9727Z" fill="black"/>
          <path d="M197 29.6223C197 27.5577 197 24.3507 195.06 22.3187C194.658 21.8901 194.186 21.5341 193.664 21.2661C192.739 19.381 190.905 17.9121 187.26 17.9121C186.708 17.9121 186.1 17.9121 185.402 17.9937C183.145 18.1814 180.426 18.6058 179.647 18.7282C178.868 18.8506 176.149 19.2994 173.893 19.8298C170.727 20.5724 168.641 21.617 167.351 23.3225C166.794 22.6941 166.101 22.202 165.326 21.8838C164.551 21.5656 163.714 21.4297 162.879 21.4864C161.931 21.5061 160.987 21.6016 160.054 21.772C157.279 22.2127 155.363 22.9145 153.967 24.0243C153.386 23.7379 152.747 23.5925 152.1 23.5999H151.906C150.527 23.6765 149.156 23.8427 147.799 24.0977C146.285 24.3033 144.784 24.592 143.302 24.9627C142.614 25.1184 141.978 25.4516 141.458 25.9295C140.937 26.4075 140.549 27.0136 140.332 27.6883C139.771 27.1567 139.106 26.7497 138.379 26.4938C137.652 26.2379 136.879 26.1389 136.111 26.2031H135.819C133.042 26.3164 130.276 26.6218 127.54 27.1171C124.762 27.5055 122.013 28.078 119.31 28.8307C117.967 29.1461 116.736 29.8297 115.755 30.8056C115.551 30.5986 115.322 30.4177 115.074 30.267C114.881 29.7456 114.58 29.2715 114.191 28.8761C113.802 28.4807 113.334 28.1731 112.817 27.9739C112.184 26.1297 110.601 25.1096 108.264 25.1096H107.517C107.517 21.9352 107.517 17.6592 107.517 14.5011C107.517 12.4039 107.517 7.34443 103.305 5.9082C102.315 4.61886 100.724 3.68041 98.1591 3.68041C97.4087 3.68527 96.6598 3.74801 95.919 3.8681C93.0783 4.28428 91.1953 4.92079 89.8155 5.949C89.241 5.68179 88.6141 5.54792 87.9812 5.5573H87.7864C86.3199 5.64371 84.8594 5.81263 83.4117 6.06325C82.4215 6.21014 81.48 6.37334 80.7009 6.52023C80.7009 6.03061 80.7009 5.58179 80.7009 5.22273C80.6891 4.38571 80.3717 3.58225 79.8089 2.9653C79.2462 2.34835 78.4775 1.961 77.6491 1.87697C77.3671 1.30057 76.9267 0.817468 76.3801 0.484844C75.8335 0.15222 75.2036 -0.0160052 74.5649 7.7643e-05H74.2321C73.1526 0.0735212 71.1966 0.375456 69.3055 0.661069C67.4144 0.946683 65.4908 1.24862 64.4357 1.47711C63.6045 1.63588 62.8539 2.07987 62.3121 2.73325C61.7703 3.38664 61.4709 4.20887 61.4651 5.05952C61.4651 5.23089 61.4651 5.4349 61.4651 5.64707C60.3003 4.97474 58.9673 4.65456 57.6261 4.72494C57.131 4.72494 56.5709 4.72494 55.8648 4.79839C52.8537 5.01056 50.086 5.3941 47.7485 5.74499C43.3738 6.42231 37.7004 7.34443 35.8093 7.76877C34.8488 7.96401 33.9874 8.49296 33.3759 9.26289C32.7645 10.0328 32.4421 10.9946 32.4654 11.9795C32.3518 15.0805 32.3518 19.2586 32.3518 23.6734C32.3518 28.0881 32.3518 32.2663 32.4654 35.3427C32.4858 35.8686 32.5731 36.3896 32.7251 36.8932H32.6196C31.9222 37.0429 31.2749 37.3709 30.7404 37.8455C30.2058 38.32 29.802 38.9252 29.5679 39.6025C28.3786 38.7353 26.9276 38.3086 25.461 38.3947C24.9334 38.3947 24.3166 38.3947 23.5293 38.4926C20.5262 38.7456 17.7586 39.1618 15.4129 39.5453C10.9895 40.2716 5.31621 41.2427 3.43322 41.716C2.47391 41.9248 1.61724 42.4639 1.01116 43.2401C0.405072 44.0164 0.0876221 44.9811 0.113629 45.9676C0 49.0685 0 53.2385 0 57.6614C0 62.0843 0 67.307 0.113629 70.3835C0.126564 70.8687 0.20856 71.3496 0.357119 71.8115C0.486981 74.7085 4.69937 75.7775 6.42815 75.7775H6.7041C8.57898 75.6796 14.2523 74.9125 18.6838 74.2923C20.9889 73.974 23.7484 73.5497 26.7515 72.8887C29.4623 72.293 31.2479 71.5259 32.3761 70.2039H32.4654C32.8357 70.6884 33.3148 71.0778 33.8636 71.3402C34.4124 71.6026 35.0152 71.7305 35.6227 71.7136H35.8418C36.5966 71.7136 38.2037 71.5504 40.2327 71.2648C42.7082 70.9139 44.1124 70.6038 44.5912 70.4487C45.2607 70.329 45.8895 70.0421 46.4199 69.6143C46.9503 69.1866 47.3653 68.6317 47.6267 68.0006C48.262 68.5717 49.004 69.0101 49.8093 69.2903C50.6147 69.5705 51.4675 69.6869 52.318 69.6327C53.1334 69.6231 53.9471 69.5549 54.7529 69.4287C56.8354 69.2495 58.8489 68.5905 60.6372 67.5028C61.2202 67.8282 61.8779 67.9942 62.5446 67.9843H62.853C63.9081 67.9435 65.6694 67.7232 66.968 67.5355C67.9095 67.4049 70.2145 67.0703 71.2372 66.7929C71.8976 66.6504 72.5123 66.3444 73.0253 65.9026C73.5384 65.4609 73.9337 64.8974 74.1753 64.2632C75.6576 65.3371 77.4653 65.8593 79.2886 65.7402C79.8162 65.7402 80.3843 65.7402 81.0417 65.6749C83.2981 65.5117 86.0089 65.1445 86.7881 65.0384C88.4114 64.8099 90.7327 64.4427 92.5264 64.0673C96.9904 63.1207 99.3198 61.6192 100.31 58.5101C100.916 58.9718 101.593 59.3302 102.315 59.5709C103.37 60.5665 105.245 61.6273 108.597 61.6273C109.885 61.6142 111.17 61.5106 112.444 61.3173C115.033 60.9582 117.508 60.6073 118.629 58.5264C119.769 59.2491 121.106 59.5918 122.451 59.5056H122.67C125.389 59.4292 128.101 59.1757 130.787 58.7467C133.553 58.3754 136.297 57.8578 139.009 57.1963C140.617 56.8635 142.055 55.9669 143.067 54.6665H143.237C143.589 55.1475 144.053 55.5349 144.587 55.7951C145.122 56.0553 145.712 56.1806 146.305 56.1599H146.671C147.304 56.1109 148.967 55.9722 150.794 55.7111C152.62 55.4499 154.292 55.1235 154.941 54.993C155.895 54.8295 156.76 54.3285 157.379 53.5803C157.999 52.8321 158.331 51.886 158.317 50.9128C158.374 48.6931 158.391 45.8778 158.391 42.6952C158.707 42.7681 159.031 42.8037 159.356 42.8013C159.492 42.8088 159.627 42.8088 159.762 42.8013C160.249 42.8013 162.002 42.5973 163.918 42.3117C164.486 42.2301 165.046 42.1403 165.541 42.0424C165.541 44.6374 165.841 46.702 166.986 48.2933C167.113 48.466 167.248 48.6322 167.392 48.7911C169.705 52.7652 173.649 52.2429 175.508 52.2429C175.979 52.2429 176.49 52.2429 177.074 52.1858C179.331 52.0389 182.05 51.6717 182.829 51.5656C183.608 51.4595 186.335 51.0597 188.591 50.57C194.914 49.1909 196.951 46.547 196.951 39.6677V33.9555C196.959 33.2516 196.795 32.5565 196.472 31.9317C196.843 31.2205 197.025 30.4249 197 29.6223ZM193.656 31.4339V37.1462C193.656 43.5929 191.952 45.8288 186.043 47.1182C183.811 47.5996 181.124 47.9832 180.361 48.0974C179.599 48.2117 176.904 48.5626 174.68 48.7095C174.128 48.7095 173.633 48.7666 173.179 48.7666C171.393 48.7666 169.169 48.5218 167.814 46.6449C167.668 46.4369 167.538 46.2187 167.424 45.992C166.841 44.6865 166.548 43.2693 166.564 41.8384C166.564 41.4222 166.564 41.0224 166.564 40.5491C166.505 39.7645 166.73 38.985 167.197 38.3539C167.015 38.1279 166.87 37.8746 166.767 37.6032C166.392 37.8524 165.973 38.0269 165.533 38.1173C165.03 38.2315 163.309 38.5906 161.418 38.868C159.527 39.1455 157.798 39.3087 157.311 39.3495C157.206 39.3572 157.1 39.3572 156.995 39.3495C156.286 39.3707 155.597 39.1164 155.071 38.6395C155.071 42.3443 155.071 45.8044 154.998 48.432C155.009 49.1915 154.75 49.9301 154.268 50.515C153.786 51.0998 153.113 51.4926 152.368 51.6227C151.727 51.7451 150.088 52.0715 148.31 52.3245C146.533 52.5775 144.869 52.7162 144.252 52.7652H143.952C143.455 52.7744 142.964 52.6594 142.523 52.4306C142.076 52.1691 141.706 51.7922 141.452 51.3388C141.198 50.8855 141.069 50.3721 141.078 49.8519C141.078 49.452 141.078 49.0359 141.078 48.5871C141.078 48.6442 141.078 48.6931 141.078 48.7421C140.551 51.6962 139.341 53.0263 136.436 53.8342C133.76 54.4904 131.05 54.9998 128.319 55.3602C125.684 55.7811 123.025 56.0318 120.357 56.1109H120.138C119.854 56.1109 119.578 56.1109 119.327 56.1109C118.339 56.0936 117.385 55.7462 116.616 55.1235C116.336 54.8913 116.095 54.6159 115.901 54.3075C115.479 57.0739 113.467 57.5064 109.993 57.9878C108.762 58.1742 107.52 58.2751 106.275 58.2898C104.313 58.4157 102.372 57.8213 100.813 56.6169C100.618 56.4519 100.436 56.2718 100.269 56.0783C100.047 55.8237 99.8458 55.5508 99.6688 55.2622C98.9606 54.0569 98.5178 52.7128 98.3701 51.3208L97.6153 52.3816C97.3962 57.588 95.5457 59.5138 90.0184 60.6889C88.2409 61.0561 85.9603 61.4315 84.337 61.6518C83.5253 61.7579 80.8794 62.1251 78.6555 62.2802C78.0225 62.3291 77.4705 62.3455 76.9754 62.3455C76.1569 62.3641 75.3392 62.2819 74.5405 62.1007C73.6723 61.888 72.8764 61.4457 72.2355 60.8195C72.0535 60.651 71.8853 60.4682 71.7323 60.2727C71.5131 59.972 71.3254 59.6493 71.1723 59.3098C71.1723 59.6607 71.1723 59.9708 71.1723 60.2401C71.168 60.9654 70.9156 61.6672 70.4574 62.2274C69.9992 62.7877 69.3632 63.1722 68.6562 63.3166C67.6579 63.5858 65.2311 63.9367 64.5087 64.0347C63.2182 64.2142 61.4813 64.4427 60.4506 64.4753H60.1908C59.4886 64.4987 58.8048 64.2471 58.2835 63.7735C56.7576 65.0139 54.7042 65.5933 52.2774 65.936C51.5009 66.0544 50.7171 66.1171 49.9318 66.1237C49.2812 66.133 48.6321 66.0589 48.0001 65.9034C47.221 65.7165 46.5028 65.3316 45.9142 64.7854C45.3452 64.2431 44.9091 63.5755 44.6399 62.8351C44.6399 63.1397 44.6399 63.4335 44.6399 63.7164C44.6765 64.5047 44.4278 65.2796 43.9398 65.8977C43.4519 66.5159 42.7577 66.9353 41.9859 67.0785C41.5151 67.1927 40.1435 67.5028 37.7086 67.8456C35.785 68.1149 34.2591 68.2454 33.4962 68.2781H33.2364C32.6836 68.2914 32.1373 68.1562 31.6538 67.8864C31.2178 67.6082 30.8589 67.2236 30.6106 66.7685C30.3622 66.3133 30.2325 65.8024 30.2334 65.2832C29.4218 67.6579 27.693 68.6698 24.1624 69.445C21.1918 70.106 18.4809 70.5222 16.1596 70.8404C11.7444 71.4606 6.10349 72.2195 4.26108 72.3175H4.05817C3.66018 72.3326 3.2634 72.2645 2.89301 72.1173C2.52261 71.97 2.18671 71.747 1.90661 71.4623C1.62652 71.1777 1.40835 70.8375 1.26596 70.4636C1.12357 70.0896 1.06006 69.6899 1.07947 69.29C1.07947 68.7759 1.07947 68.2291 1.03889 67.6579C0.973962 64.8262 0.973962 61.3336 0.973962 57.6696C0.973962 53.263 0.973962 49.093 1.07947 46.0084C1.04894 45.2325 1.29446 44.4712 1.77196 43.861C2.24947 43.2508 2.92767 42.8317 3.68482 42.6789C5.53535 42.2138 11.1762 41.2509 15.5834 40.5246C17.8803 40.1492 20.6236 39.7085 23.5942 39.4801C24.349 39.4148 24.9415 39.3903 25.4448 39.3903C27.555 39.3903 28.8374 40.0594 29.6084 41.0877C29.8511 41.4138 30.0503 41.7704 30.2009 42.1485C30.2009 41.8466 30.2009 41.5365 30.2009 41.2427C30.1728 40.4604 30.4204 39.6932 30.9001 39.0766C31.3797 38.46 32.0606 38.0335 32.8225 37.8725L33.0417 37.8153C33.3501 37.7419 33.7478 37.644 34.2348 37.546C33.9986 37.3101 33.8062 37.0338 33.6666 36.73C33.4883 36.2972 33.3893 35.8355 33.3744 35.3672C33.277 32.2499 33.277 28.08 33.277 23.6652C33.277 19.2504 33.277 15.0968 33.3907 12.004C33.3654 11.2263 33.6173 10.4651 34.101 9.85762C34.5846 9.25015 35.2682 8.83638 36.0285 8.69089C37.879 8.24207 43.528 7.35259 47.9352 6.6916C50.224 6.3407 52.9673 5.95716 55.9379 5.74499C56.6278 5.71235 57.1716 5.71235 57.6261 5.71235C58.8736 5.62054 60.1173 5.9353 61.1729 6.61C61.6917 6.99502 62.105 7.506 62.3741 8.09519C62.3741 7.84221 62.3741 7.5566 62.3741 7.22202V6.79768C62.3741 6.17749 62.3741 5.57363 62.4228 5.16561C62.4156 4.52306 62.6338 3.89849 63.039 3.40156C63.4442 2.90462 64.0105 2.56708 64.6386 2.44819C65.6694 2.20338 67.5929 1.90961 69.4516 1.63216C71.3102 1.3547 73.2663 1.05277 74.3214 0.979325H74.5811C74.9538 0.973612 75.323 1.05203 75.6615 1.20879C76 1.36555 76.2993 1.59667 76.5372 1.88513C76.8818 2.34274 77.0799 2.89484 77.1053 3.46824C77.1053 4.00683 77.1053 4.80655 77.1053 5.57363C77.1053 6.55287 77.1053 7.14042 77.1053 7.68717C77.0882 8.37862 76.8263 9.04125 76.3667 9.5559C76.6447 9.90487 76.8341 10.3166 76.9186 10.7555C76.9409 10.0259 77.2145 9.32675 77.6927 8.77752C78.1709 8.22829 78.8239 7.86308 79.5402 7.74429L80.6927 7.5158C81.5044 7.36891 82.4865 7.18938 83.5335 7.03434C85.1567 6.79768 86.8287 6.55287 87.7864 6.53655H87.965C88.6518 6.51453 89.3252 6.73062 89.8723 7.14858C91.2115 5.92452 93.1189 5.26353 96.0407 4.83919C96.7359 4.726 97.4387 4.66598 98.1429 4.65966C99.3462 4.60956 100.536 4.93138 101.552 5.58179C103.987 7.21386 103.987 10.7392 103.987 12.6813C103.987 16.7615 103.987 22.6615 103.987 25.738C103.987 26.1133 103.987 26.4479 103.987 26.7254L104.952 26.5214L106.089 26.3255C106.641 26.2357 107.12 26.1705 107.55 26.1378C107.818 26.1378 108.069 26.1378 108.305 26.1378C108.961 26.0806 109.621 26.2019 110.215 26.4891C110.809 26.7762 111.315 27.2186 111.681 27.7699C112.063 28.4832 112.248 29.2862 112.217 30.0956V30.8545H112.282C112.55 30.8095 112.821 30.785 113.093 30.7811C113.576 30.7571 114.056 30.8632 114.484 31.0884C114.912 31.3137 115.273 31.6499 115.528 32.0623C115.577 32.1367 115.617 32.216 115.65 32.2989C115.706 32.409 115.752 32.5236 115.788 32.6416C115.845 32.5356 115.901 32.4295 115.966 32.3234C116.697 31.0912 117.817 30.3894 119.667 29.8753C122.334 29.1383 125.045 28.5767 127.784 28.1942C130.465 27.7045 133.177 27.4045 135.9 27.2966H136.184C138.051 27.2966 139.285 27.7944 140.096 28.9287C140.575 29.6732 140.903 30.505 141.062 31.3768V31.4584C141.058 31.4772 141.058 31.4967 141.062 31.5155C141.062 30.7566 141.062 30.0058 141.062 29.2143V29.0511C141.054 28.316 141.299 27.6008 141.754 27.0256C142.209 26.4504 142.848 26.0505 143.562 25.893C145.013 25.5454 146.482 25.273 147.961 25.077C149.275 24.8311 150.604 24.6675 151.938 24.5873H152.108C152.817 24.5586 153.51 24.794 154.056 25.2483C155.404 23.9263 157.352 23.1919 160.209 22.7431C161.093 22.5825 161.989 22.4924 162.887 22.4738C163.618 22.4136 164.352 22.5304 165.028 22.8144C165.705 23.0983 166.304 23.5412 166.775 24.1059C167.018 24.4231 167.222 24.7682 167.383 25.1341C167.496 24.8792 167.623 24.6312 167.765 24.3915C168.877 22.5472 170.857 21.5109 174.112 20.7438C176.344 20.2215 179.03 19.7809 179.793 19.6585C180.556 19.5361 183.259 19.1199 185.475 18.9322C186.148 18.8751 186.725 18.8506 187.252 18.8506C189.687 18.8506 191.213 19.5524 192.122 20.6703C193.445 22.2535 193.615 24.6608 193.615 27.1089C193.681 27.9308 193.434 28.7471 192.926 29.3938C193.422 29.9536 193.684 30.6846 193.656 31.4339Z" fill="white"/>
          <path d="M98.5163 30.2998C98.2995 30.9019 98.163 31.5303 98.1105 32.1685C98.1105 32.4378 98.0618 32.7234 98.0537 32.9845C97.5785 33.0995 97.1295 33.3044 96.7307 33.5884C96.1588 34.018 95.7609 34.6412 95.6107 35.3429C94.5756 34.5689 93.3213 34.1485 92.0313 34.1433C91.8122 34.1433 91.5768 34.1433 91.3414 34.1433C90.7733 34.1433 90.1321 34.1433 89.3854 34.2331C87.1615 34.4371 84.5156 34.8533 83.704 34.9757C83.3306 35.0328 82.5027 35.1715 81.5044 35.351C80.4412 35.5387 79.1832 35.7835 78.0306 36.0447C77.6086 36.1426 77.219 36.2487 76.8294 36.3548C73.6884 37.2279 71.9596 38.452 71.148 40.6635C71.1515 40.6796 71.1515 40.6963 71.148 40.7124C70.9815 41.1658 70.8539 41.6326 70.7665 42.1078C70.5665 41.4351 70.2416 40.8065 69.8088 40.2554C68.8916 39.1456 67.4388 38.4601 65.1338 38.4601H64.6711C64.2978 38.4601 63.8595 38.4601 63.4456 38.5336C61.8223 38.6886 60.2964 38.8355 57.4314 39.2925C55.524 39.5944 52.9917 40.0433 50.8815 40.541C50.4351 40.6471 50.0049 40.7532 49.6072 40.8675C49.0556 41.0198 48.5136 41.2051 47.9839 41.4224C47.1465 41.7575 46.4144 42.3132 45.8645 43.0312C45.3146 43.7492 44.9673 44.6029 44.8591 45.5026C44.8591 45.6331 44.8104 45.7637 44.7942 45.8943C44.7942 44.1316 44.7942 42.4751 44.7293 40.998C44.7293 40.4676 44.7293 39.9698 44.6887 39.4884C44.6887 39.4068 44.6887 39.3333 44.6887 39.2599C44.6616 38.8151 44.5486 38.3799 44.3559 37.9787C44.2839 37.821 44.1969 37.6707 44.0962 37.5299L45.1432 37.3993L48.5602 36.9505C50.849 36.6485 53.5923 36.2487 56.5629 35.6203C60.0448 34.8859 61.7979 33.9066 62.6096 31.6381V31.7768C62.6024 32.3239 62.7587 32.8606 63.0582 33.3174C63.3578 33.7742 63.7867 34.1301 64.2897 34.3392C64.6887 34.4916 65.1128 34.5663 65.5396 34.5595H65.6613C66.0022 34.5595 66.4161 34.5595 66.8869 34.486C67.8446 34.3963 69.0134 34.2412 70.1334 34.0943C71.8054 33.874 73.5342 33.6455 74.5487 33.3844C75.2484 33.2706 75.8867 32.9149 76.3534 32.3786C76.8202 31.8423 77.0861 31.159 77.1054 30.4466C77.1871 30.8902 77.3787 31.3058 77.6624 31.6553C77.9461 32.0047 78.3128 32.2766 78.7286 32.4459C79.0902 32.5898 79.4761 32.6618 79.8649 32.6581H80.1652H80.5954C81.407 32.5928 82.7462 32.4704 84.1423 32.2827C86.1064 32.0216 87.9326 31.687 88.2897 31.6136C88.8005 31.5383 89.2849 31.3372 89.6998 31.0283C90.1147 30.7193 90.4472 30.3121 90.6678 29.8428C90.9326 30.2061 91.2819 30.4987 91.6851 30.695C92.0883 30.8913 92.5332 30.9854 92.9809 30.9689H93.2731C94.0442 30.9118 95.5863 30.7812 97.2907 30.5609H97.5829L98.5163 30.2998Z" fill="white"/>
          <path d="M69.752 40.28L69.5815 40.2065H69.7195L69.752 40.28Z" fill="black"/>
          <path d="M115.455 31.9725C115.459 32.0513 115.459 32.1303 115.455 32.2091H115.561C115.533 32.1269 115.498 32.0476 115.455 31.9725ZM92.2911 7.78506H92.3722L92.6563 7.58105C92.531 7.64228 92.409 7.71039 92.2911 7.78506ZM69.7195 40.2389H69.5815L69.752 40.3124L69.7195 40.2389Z" fill="white"/>
          <path d="M24.2028 54.5201V54.2916C28.261 53.3613 28.8941 52.3168 28.8941 47.1758C28.8941 41.6185 28.0824 41.0228 23.7483 41.39C20.9238 41.6267 18.3185 42.0184 15.8917 42.4183L10.9001 43.2343L10.4618 43.3077H10.267H10.0154C7.40197 43.7647 5.14562 44.1809 4.16355 44.4339C3.80612 44.4885 3.48315 44.679 3.26119 44.9659C3.03922 45.2528 2.93516 45.6144 2.97044 45.9762C2.97044 46.1149 2.97044 46.2536 2.97044 46.4005C2.87305 49.4035 2.87305 53.3858 2.87305 57.5639C2.87305 62.0195 2.87305 66.0997 2.98668 69.119C2.98668 70.0493 3.40061 70.3349 4.17978 70.2941C5.89233 70.2044 11.2897 69.4781 15.9079 68.8334C18.3428 68.4989 20.94 68.0908 23.7645 67.4707C28.123 66.5077 28.9103 65.6672 28.9103 60.1263C28.8941 55.0342 28.261 54.2916 24.2028 54.5201ZM17.7097 61.587C17.5961 62.248 17.4094 62.3541 16.7764 62.403L14.5444 62.7295C14.2765 62.7295 14.171 62.5989 14.171 62.0277V58.7635C14.171 58.2413 14.2765 57.9964 14.5444 57.9475L16.7358 57.6129C17.3688 57.5231 17.5474 57.6129 17.6691 58.2004C17.7681 58.7387 17.817 59.2851 17.8152 59.8325C17.8236 60.4201 17.7801 61.0072 17.6854 61.587H17.7097ZM17.6691 52.5616C17.5555 53.2226 17.3688 53.3287 16.7358 53.4266L14.5444 53.7612C14.2765 53.802 14.171 53.6306 14.171 53.0676V49.7789C14.171 49.2485 14.2765 49.0037 14.5444 48.9629L16.7764 48.612C17.4094 48.5059 17.588 48.5549 17.7097 49.1832C17.792 49.7231 17.8273 50.2692 17.8152 50.8153C17.8114 51.4014 17.7543 51.9859 17.6448 52.5616H17.6691Z" fill="white"/>
          <path d="M42.8221 51.5738C42.8221 56.1925 42.8222 60.4604 42.7085 63.6185C42.7569 63.9853 42.6584 64.3565 42.4347 64.6503C42.2109 64.9441 41.8803 65.1366 41.5154 65.1853C40.7768 65.3648 39.3565 65.6423 37.4572 65.9116C36.0288 66.1156 34.7951 66.238 33.9591 66.2951C33.7237 66.2951 33.5208 66.2951 33.3585 66.3359C32.5469 66.3359 32.206 66.0748 32.1654 65.12C32.0518 62.0191 32.0518 57.7757 32.0518 53.214C32.0518 49.1338 32.0518 45.2821 32.1329 42.2628C32.1329 42.0669 32.1329 41.8711 32.1329 41.6915C32.1329 41.512 32.1329 41.4141 32.1329 41.2835C32.0908 40.9168 32.1915 40.548 32.414 40.2544C32.6364 39.9608 32.9633 39.7652 33.326 39.7085C33.5939 39.6351 33.9591 39.5453 34.4055 39.4474L35.558 39.2108L37.4248 38.8762H37.4897C39.3889 38.5661 40.7849 38.411 41.5479 38.3702C42.3108 38.3294 42.6842 38.5906 42.7329 39.5045C42.7375 39.5261 42.7375 39.5483 42.7329 39.5698C42.7329 40.0431 42.7329 40.5409 42.7735 41.0632C42.8222 44.0009 42.8221 47.7139 42.8221 51.5738Z" fill="white"/>
          <path d="M67.5524 40.8673C67.0363 40.5894 66.4652 40.4305 65.8804 40.4021C65.0973 40.3341 64.3098 40.3341 63.5267 40.4021C61.8141 40.5572 60.3938 40.7041 57.6423 41.1447L56.3924 41.3487H56.3275C53.9981 41.7486 51.7093 42.1648 50.0454 42.6626C49.3261 42.8276 48.6362 43.1028 48.0001 43.4786C47.6233 43.7432 47.3078 44.0866 47.0753 44.4852C46.8427 44.8838 46.6986 45.3282 46.6528 45.788C46.6041 46.0491 46.5635 46.3266 46.531 46.604C46.4138 47.5843 46.3542 48.5707 46.3525 49.5581C46.3525 50.3007 46.4661 50.4721 47.1641 50.3741L48.0894 50.2681C49.3149 50.1212 50.711 49.909 51.5956 49.7703C52.7076 49.5989 54.761 49.248 55.4671 49.1011C56.1733 48.9542 56.1733 48.84 56.2138 47.9668C56.2138 46.7836 56.433 46.5551 57.7803 46.3347C58.7786 46.1797 59.152 46.3347 59.1925 46.9794C59.1925 47.8852 59.1925 49.3378 59.1925 50.3578L48.2842 51.9899H48.0569C47.5832 52.0479 47.1423 52.2633 46.8042 52.6018C46.466 52.9403 46.2499 53.3826 46.1901 53.8586C46.1223 54.1261 46.0788 54.3993 46.0603 54.6747C46.0603 54.7644 46.0603 54.8624 46.0603 54.9521C45.9954 55.8253 45.9629 56.9351 45.9629 57.9143C45.9629 61.4641 46.4174 63.2757 48.0326 63.9367C49.3205 64.3154 50.6823 64.3631 51.9933 64.0754C56.7252 63.4063 58.4864 61.9374 59.1114 58.1918H59.298V61.6192C59.298 62.4842 59.7444 62.6555 60.3369 62.6147C61.0836 62.6147 62.4959 62.427 64.2084 62.1904C65.921 61.9537 67.455 61.6844 68.1205 61.5212C68.4368 61.4826 68.7272 61.3264 68.9345 61.0832C69.1418 60.84 69.251 60.5275 69.2406 60.2074C69.3136 57.6614 69.3136 51.027 69.3136 46.3837C69.2974 43.2501 68.8348 41.618 67.5524 40.8673ZM59.2007 55.6866C59.2007 56.3231 58.9085 56.7148 57.829 56.878C56.7495 57.0412 56.4898 56.878 56.3031 56.625C56.1305 56.2275 56.0661 55.7909 56.1164 55.3601C56.1164 54.9276 56.1164 54.5441 56.1164 54.2503C56.1895 53.7281 56.4167 53.622 56.9281 53.5485L59.1925 53.2058L59.2007 55.6866Z" fill="white"/>
          <path d="M138.83 42.8828C137.45 43.0052 135.51 43.2908 134.398 43.454C133.286 43.6172 131.006 43.9518 130.226 44.1476C129.634 44.2782 129.52 44.2945 129.52 44.9229C129.52 45.5512 129.52 46.4244 129.48 46.9303C129.48 47.6484 129.033 47.9177 127.994 48.0646C126.956 48.2115 126.542 48.0646 126.501 47.3628C126.428 46.3346 126.428 44.5067 126.428 42.7522L134.398 41.5608C135.778 41.3568 137.377 41.1201 138.684 40.8427C139.568 40.6632 139.755 40.3449 139.755 38.7047C139.748 36.3489 139.539 33.9982 139.13 31.6786C138.643 29.4834 137.969 29.0428 135.884 29.0836C133.248 29.203 130.624 29.4974 128.027 29.9649L126.761 30.1689L126.615 30.1934C124.425 30.5327 122.257 31.0014 120.122 31.597C119.201 31.7716 118.361 32.2411 117.727 32.9353C117.273 33.6033 116.981 34.3691 116.875 35.1712C116.826 35.416 116.778 35.7016 116.729 35.9872C116.387 38.42 116.224 40.8748 116.242 43.3316C116.242 43.9681 116.242 44.572 116.242 45.1432C116.242 46.0817 116.315 46.9385 116.372 47.7219C116.459 48.9895 116.619 50.251 116.851 51.5002C117.265 53.3607 117.817 53.9483 119.286 54.0707C119.529 54.0707 119.805 54.0707 120.097 54.0707C122.732 53.9975 125.359 53.7549 127.962 53.3444C130.605 52.9885 133.228 52.4927 135.819 51.8592C137.978 51.2635 138.684 50.578 139.065 48.285C139.351 46.8946 139.53 45.4841 139.601 44.066C139.601 43.25 139.536 42.8175 138.83 42.8828ZM126.501 36.4932C126.501 35.7751 126.915 35.5139 127.994 35.3426C129.074 35.1712 129.447 35.3426 129.48 36.0281C129.52 36.9012 129.553 37.8152 129.553 38.7781L126.428 39.2514C126.46 38.1661 126.46 37.2031 126.501 36.4932Z" fill="white"/>
          <path d="M166.272 31.1319C166.272 32.8945 166.272 34.0533 166.272 34.7959C166.3 35.1305 166.199 35.4633 165.991 35.7259C165.783 35.9885 165.482 36.1608 165.152 36.2076C164.478 36.3545 162.879 36.6809 161.166 36.9339C159.454 37.1869 157.855 37.3419 157.181 37.399C156.508 37.4562 156.142 37.2603 156.102 36.33C156.102 35.6038 156.102 34.7959 156.029 34.2002C155.956 33.6045 155.728 33.1801 154.982 33.2944C153.57 33.5147 153.196 34.1104 153.196 37.6602C153.196 41.7404 153.196 45.5349 153.123 48.3095C153.151 48.6423 153.05 48.9731 152.841 49.233C152.633 49.4929 152.333 49.662 152.003 49.7049C151.338 49.8436 149.771 50.1456 148.059 50.3822C146.598 50.5862 145.242 50.7168 144.455 50.7821H144.114C143.513 50.7821 143.035 50.6352 142.994 49.7131C142.921 46.9793 142.921 43.3072 142.921 39.2922C142.921 35.2773 142.921 32.9761 142.97 30.3974C142.97 30.1281 142.97 29.8588 142.97 29.5814C142.97 29.4263 142.97 29.2631 142.97 29.1081C142.95 28.7819 143.054 28.4603 143.26 28.2077C143.466 27.9551 143.76 27.7899 144.082 27.7453C145.089 27.4828 146.111 27.2784 147.141 27.1333L148.237 26.9619C149.466 26.7315 150.707 26.5762 151.954 26.4968C152.701 26.4968 153.074 26.7008 153.074 27.5494L153.148 31.9234H153.334C153.748 29.0673 154.381 27.3862 155.72 26.3091C156.776 25.493 158.285 25.0034 160.485 24.677L161.061 24.5954C165.119 23.9507 166.272 24.7178 166.272 31.1319Z" fill="white"/>
          <path d="M191.749 31.4343V37.1466C191.749 42.6304 190.702 44.1401 185.637 45.2499C183.892 45.6253 181.619 45.9843 180.094 46.1965C178.568 46.4086 176.295 46.6861 174.542 46.8003C169.77 47.1023 168.568 46.0659 168.447 41.439C168.447 41.235 168.447 41.0309 168.447 40.8106V40.5658C168.447 39.8314 168.447 39.5213 169.112 39.3417L171.182 39.0072L173.617 38.6318C174.737 38.4686 177.115 38.1177 177.862 38.0524C178.454 38.0524 178.495 38.0524 178.568 38.6889C178.568 39.0317 178.568 39.4642 178.641 39.7661C178.722 40.4924 179.055 40.6637 180.061 40.5168C181.068 40.37 181.441 40.0599 181.441 39.3581V36.0939C181.441 35.5716 181.327 35.5064 181.068 35.539L171.498 36.9671C170.378 37.1303 169.567 37.2364 169.364 37.2527C168.731 37.3506 168.439 37.0487 168.439 36.3142V30.7162C168.433 29.8989 168.468 29.0819 168.544 28.2681C168.605 27.2784 168.882 26.3144 169.356 25.4446C170.167 24.041 171.791 23.2984 174.526 22.6537C176.003 22.311 177.821 21.9683 179.29 21.7235H179.379H179.461L180.077 21.6255C181.603 21.3807 183.876 21.0625 185.621 20.9156C190.685 20.4994 191.732 21.7316 191.732 27.1828C191.732 27.9335 191.692 28.2436 191.059 28.4313C189.573 28.7006 187.634 28.9944 186.522 29.1657C185.41 29.3371 183.015 29.7043 182.269 29.7696C181.676 29.7696 181.636 29.7696 181.563 29.1413C181.563 28.7985 181.563 28.3252 181.49 28.0641C181.417 27.3378 181.043 27.1746 180.077 27.3215C179.112 27.4684 178.698 27.803 178.698 28.4966V31.7118C178.698 32.234 178.811 32.2993 179.071 32.2585C181.563 31.8832 190.093 30.6265 190.799 30.5285C191.505 30.4306 191.749 30.6836 191.749 31.4343Z" fill="white"/>
          <path d="M114.059 50.9863C114.059 52.1859 114.059 53.0101 113.986 53.6793C113.84 55.0992 113.466 55.4419 109.668 55.9723C104.709 56.6741 102.136 56.1682 100.91 53.5814C100.204 52.0717 99.9446 49.8521 99.9446 46.7429V41.9773L98.9058 42.1323C97.6802 42.32 97.4123 41.9528 97.3799 40.8593C97.3799 40.2554 97.3799 39.4884 97.3799 38.7131C97.3799 37.9379 97.3799 37.4075 97.3799 36.8199C97.3799 36.7301 97.3799 36.6404 97.3799 36.5506C97.3799 36.4608 97.3799 36.4364 97.3799 36.3792C97.4367 35.4 97.737 34.9838 98.8976 34.8043L99.5307 34.6982L99.9365 34.6329V33.621C99.9365 33.4986 99.9365 33.3925 99.9365 33.2783C99.9365 33.1641 99.9365 32.8132 99.9365 32.601C99.9365 32.3399 99.9852 32.095 100.026 31.8665C100.35 29.9815 101.471 29.1328 104.725 28.4637C105.196 28.3657 105.707 28.276 106.275 28.1781L106.665 28.1209C106.925 28.1209 107.16 28.0556 107.379 28.0393C109.676 27.8272 110.155 28.4718 110.155 30.0141V33.0172L112.428 32.6581C113.653 32.4623 113.913 32.8295 113.953 33.9393C113.953 34.5921 113.953 35.3347 113.953 36.1181C113.953 36.9015 113.953 37.6849 113.953 38.3051C113.913 39.4312 113.653 39.8801 112.428 40.0677L110.155 40.4186V46.6695C110.155 48.3016 110.301 48.3669 112.087 48.1057C113.872 47.8446 114.059 48.016 114.059 50.9863Z" fill="white"/>
          <path d="M95.6673 45.878V51.1578C95.6673 56.2335 94.6202 57.6371 89.5556 58.7143C87.8025 59.0815 85.4975 59.4406 84.0041 59.6527C82.5107 59.8649 80.2056 60.1424 78.4606 60.2729C77.1415 60.4483 75.8009 60.3595 74.516 60.0118C72.7954 59.3998 72.349 57.8085 72.349 54.5607C72.349 53.8833 72.349 53.5977 73.0226 53.4264C73.4934 53.3366 74.021 53.255 74.5404 53.1734C75.6605 52.9939 76.8049 52.8307 77.5678 52.7164C78.6797 52.5532 81.0659 52.2023 81.8127 52.137C82.4051 52.137 82.4457 52.137 82.5188 52.7164C82.5188 53.0265 82.5188 53.4345 82.5918 53.7038C82.6649 54.3811 83.0058 54.5199 84.0041 54.3893C85.0024 54.2587 85.3838 53.9486 85.3838 53.304V50.3173C85.3838 49.8358 85.2702 49.7705 85.0105 49.8113C82.9895 50.1132 77.162 50.9782 74.5404 51.3455C73.883 51.4434 73.4285 51.5005 73.2824 51.5168C72.6493 51.6066 72.349 51.3291 72.349 50.66V45.4863C72.3448 44.7697 72.3773 44.0534 72.4464 43.3401C72.4922 42.8748 72.5736 42.4137 72.6899 41.961C73.3067 39.7169 74.8732 38.7703 78.4606 37.9461C79.881 37.6197 81.626 37.3014 83.0626 37.0566H83.1194L84.0041 36.9097C85.5381 36.6649 87.8025 36.3467 89.5556 36.1835C94.6202 35.7428 95.6673 36.8363 95.6673 41.8957C95.6673 42.5894 95.6267 42.8831 94.9936 43.0545C93.5083 43.3238 91.5685 43.6176 90.4484 43.7889C89.3284 43.9603 86.9503 44.3275 86.2036 44.401C85.6111 44.401 85.5705 44.401 85.4975 43.8216C85.4975 43.5115 85.4975 43.1035 85.4244 42.826C85.3514 42.1569 84.978 42.01 84.0041 42.165C83.0301 42.3201 82.6324 42.6138 82.6324 43.2585V46.2289C82.6324 46.7104 82.7379 46.7756 83.0057 46.7348C85.4975 46.3595 94.0278 45.1028 94.7339 45.0048C95.44 44.9069 95.6673 45.1925 95.6673 45.878Z" fill="white"/>
          <path d="M102.039 12.6815C102.039 17.0228 102.039 23.4124 102.039 26.2196C102.039 26.3828 102.039 26.5297 102.039 26.6684C102.051 26.8263 102.032 26.9849 101.982 27.1352C101.932 27.2855 101.854 27.4243 101.75 27.5436C101.647 27.6628 101.52 27.7602 101.379 27.8299C101.238 27.8996 101.084 27.9403 100.927 27.9496C100.48 28.0394 99.6281 28.1944 98.6054 28.3576C98.0941 28.4392 97.5422 28.5208 96.9822 28.5943C95.2696 28.8228 93.7356 28.9452 93.0782 28.9941C92.4208 29.0431 91.9987 28.8636 91.9582 28.0149C91.8851 25.4852 91.8851 18.9405 91.8851 15.3091C91.8851 14.2973 91.5523 13.9953 90.5784 14.1341C89.4664 14.2891 89.0525 14.5829 89.0525 16.5332C89.0525 20.2625 89.0525 25.8687 88.9795 28.4066C88.9995 28.7257 88.8928 29.0398 88.6829 29.28C88.4729 29.5201 88.1768 29.6668 87.8594 29.6878C87.1939 29.8102 85.5544 30.1121 83.8012 30.3324C82.5351 30.5038 81.3663 30.618 80.5547 30.6833L79.9216 30.7323C79.321 30.7731 78.834 30.6099 78.8016 29.7612C78.7285 27.256 78.7285 23.8612 78.7285 20.3441C78.7285 16.827 78.7285 13.7424 78.7934 11.2779C78.7934 11.1473 78.7934 11.0249 78.7934 10.9107C78.7796 10.5923 78.8882 10.2807 79.0968 10.0406C79.3053 9.80054 79.5978 9.65041 79.9135 9.62135L80.6277 9.47447C81.4394 9.31942 82.5594 9.11541 83.785 8.93588C85.2703 8.71555 86.9828 8.46258 87.8432 8.45442C88.7035 8.44626 88.9632 8.64211 88.9632 9.41734L89.0363 13.0242H89.223C89.783 10.1926 90.4891 8.70739 92.3234 7.80975H92.4046L92.6886 7.60574C93.8614 7.16723 95.0821 6.87136 96.3248 6.72442C100.732 6.07974 102.039 7.41805 102.039 12.6815Z" fill="white"/>
          <path d="M92.6563 7.61377L92.3722 7.81778H92.291C92.409 7.7431 92.5309 7.675 92.6563 7.61377Z" fill="white"/>
          <path d="M75.149 20.7687C75.149 25.159 75.1491 27.3949 75.076 30.2592C75.076 31.0753 74.7027 31.3446 73.956 31.5241C73.0632 31.7608 71.3181 31.9892 69.7517 32.2014C68.7696 32.332 67.682 32.4707 66.7892 32.5605C66.2941 32.6094 65.8639 32.6421 65.5393 32.6421C64.8007 32.6421 64.4598 32.4381 64.4274 31.6791C64.3462 28.8638 64.3462 26.6442 64.3462 22.2784C64.3462 18.2553 64.3462 16.052 64.4192 13.3672C64.4192 13.253 64.4192 13.1387 64.4192 13.0163C64.4105 12.935 64.4105 12.8529 64.4192 12.7715C64.5085 12.1758 64.8494 11.9065 65.5068 11.7433C65.7503 11.678 66.0506 11.6127 66.3996 11.5393C67.3411 11.3598 68.5992 11.1721 69.7192 11.0089C71.2857 10.7722 73.0307 10.5193 73.9235 10.5029C74.6702 10.5029 75.003 10.6906 75.0435 11.4577C75.1491 14.2975 75.149 16.5335 75.149 20.7687Z" fill="white"/>
          <path d="M75.2221 5.574C75.2221 6.49613 75.2221 7.07551 75.2221 7.54882C75.2221 8.02212 74.9948 8.36486 74.4754 8.50358C73.5096 8.72391 71.6103 9.00953 69.7841 9.27882C68.4125 9.48283 67.0002 9.695 65.9695 9.80925L65.0929 9.89901C64.5653 9.89901 64.3787 9.7358 64.3462 9.17273C64.3462 8.79736 64.3462 8.3567 64.3462 7.66306V7.23056C64.3462 6.69198 64.3462 6.14523 64.3462 5.70457C64.3462 5.54136 64.3462 5.39447 64.3462 5.27207C64.3462 4.69268 64.5653 4.45603 65.0929 4.3173H65.2471C66.2535 4.10513 68.0554 3.82768 69.7841 3.55839C71.5129 3.28909 73.5096 2.99532 74.4754 2.92188C74.9948 2.92188 75.1815 3.08508 75.2221 3.65631C75.2627 4.22754 75.2221 4.83957 75.2221 5.574Z" fill="white"/>
          <path d="M56.5224 20.7599V20.5232C60.5806 19.6419 61.2218 18.5974 61.2218 13.489C61.2218 7.95624 60.4101 7.34421 56.0841 7.66247C53.2515 7.86648 50.6462 8.22553 48.2275 8.58459C43.6093 9.29455 38.2119 10.1514 36.4912 10.5512C36.1378 10.604 35.8185 10.7925 35.6006 11.0771C35.3826 11.3617 35.2829 11.7202 35.3225 12.0772C35.3225 12.1588 35.3225 12.2486 35.3225 12.3221C35.2251 15.3577 35.2251 19.4053 35.2251 23.665C35.2251 28.1206 35.2251 32.1926 35.3387 35.2201C35.3112 35.4104 35.3309 35.6046 35.396 35.7854C35.4612 35.9662 35.5697 36.128 35.7121 36.2565C35.958 36.3974 36.2435 36.4519 36.5237 36.4115C37.6194 36.3626 40.1842 36.0769 43.1061 35.7179L48.2275 35.0895C50.6624 34.7631 53.2515 34.3714 56.0841 33.7757C60.4426 32.8536 61.2218 32.0212 61.2218 26.4885C61.2218 21.3066 60.5887 20.5559 56.5224 20.7599ZM46.377 18.932V15.6678C46.377 15.1374 46.4906 14.8518 46.7503 14.8518L48.9823 14.5172C49.6154 14.4274 49.7939 14.4764 49.9076 15.1047C49.9968 15.6439 50.0349 16.1904 50.0212 16.7368C50.0216 17.3028 49.9755 17.8677 49.8832 18.426C49.7696 19.087 49.5748 19.1931 48.9417 19.2829L46.7503 19.6011C46.4906 19.6664 46.377 19.495 46.377 18.932ZM50.0131 27.7452C49.8995 28.398 49.7209 28.5041 49.0797 28.5612L46.8477 28.8713C46.588 28.8713 46.4744 28.7244 46.4744 28.1614V24.8972C46.4744 24.3668 46.588 24.122 46.8477 24.0812L49.0472 23.7711C49.6803 23.6813 49.8589 23.7303 49.9806 24.3586C50.0787 24.897 50.1276 25.4433 50.1267 25.9907C50.1446 26.5778 50.1065 27.1653 50.0131 27.7452Z" fill="white"/>
          </svg>
          </a>
      </div>
      <div className="contact-lock">
        <h4 className="phone-number-header">800-479-0945</h4>
        <svg width="26" height="29" viewBox="0 0 26 29" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M4.5999 12.0848V9.28477C4.5999 7.05695 5.4849 4.92037 7.06021 3.34507C8.63551 1.76976 10.7721 0.884766 12.9999 0.884766C15.2277 0.884766 17.3643 1.76976 18.9396 3.34507C20.5149 4.92037 21.3999 7.05695 21.3999 9.28477V12.0848H22.7999C23.5425 12.0848 24.2547 12.3798 24.7798 12.9049C25.3049 13.43 25.5999 14.1422 25.5999 14.8848V26.0848C25.5999 26.8274 25.3049 27.5396 24.7798 28.0647C24.2547 28.5898 23.5425 28.8848 22.7999 28.8848H3.1999C2.4573 28.8848 1.74511 28.5898 1.22 28.0647C0.694902 27.5396 0.399902 26.8274 0.399902 26.0848V14.8848C0.399902 13.3448 1.6599 12.0848 3.1999 12.0848H4.5999ZM11.5999 21.5068V24.6848H14.3999V21.5068C14.9337 21.1986 15.3509 20.7229 15.5868 20.1534C15.8226 19.584 15.864 18.9526 15.7045 18.3572C15.545 17.7618 15.1934 17.2357 14.7044 16.8605C14.2154 16.4853 13.6163 16.2819 12.9999 16.2819C12.3835 16.2819 11.7844 16.4853 11.2954 16.8605C10.8064 17.2357 10.4548 17.7618 10.2953 18.3572C10.1358 18.9526 10.1772 19.584 10.413 20.1534C10.6489 20.7229 11.0661 21.1986 11.5999 21.5068ZM8.7999 9.28477V12.0848H17.1999V9.28477C17.1999 8.17086 16.7574 7.10257 15.9698 6.31492C15.1821 5.52726 14.1138 5.08477 12.9999 5.08477C11.886 5.08477 10.8177 5.52726 10.0301 6.31492C9.2424 7.10257 8.7999 8.17086 8.7999 9.28477Z" fill="#143956"/>
        </svg>
      </div>
    </div>
  );
}