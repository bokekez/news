const categoryIcons = {
  home: <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.7557 9.41083L10.589 0.244164C10.2636 -0.0811541 9.7361 -0.0811541 9.41068 0.244164L0.244013 9.41083C0.00575645 9.64916 -0.0655052 10.0075 0.0634481 10.3189C0.192401 10.6302 0.496183 10.8333 0.83318 10.8333H1.87485C1.98991 10.8333 2.08318 10.9266 2.08318 11.0417V19.1667C2.08318 19.6269 2.45628 20 2.91651 20H7.70818C7.82324 20 7.91651 19.9067 7.91651 19.7917V15.8333C7.91651 14.6827 8.84925 13.75 9.99985 13.75C11.1504 13.75 12.0832 14.6827 12.0832 15.8333V19.7917C12.0832 19.9067 12.1765 20 12.2915 20H17.0832C17.5434 20 17.9165 19.6269 17.9165 19.1667V11.0417C17.9165 10.9266 18.0098 10.8333 18.1248 10.8333H19.1665C19.5035 10.8333 19.8073 10.6302 19.9362 10.3189C20.0652 10.0075 19.9939 9.64916 19.7557 9.41083Z"/>
  </svg>,
  general: <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 19H2.5C1.11929 19 0 17.8487 0 16.4286V7C0 5.57984 1.11929 4.42857 2.5 4.42857H5.75C5.85409 4.42726 5.94127 4.34711 5.95417 4.24086L6.07417 3.25257C6.23052 1.96566 7.29411 0.999934 8.555 1H11.445C12.7049 1.00123 13.7671 1.96664 13.9233 3.25257L14.0433 4.24086C14.0564 4.34807 14.145 4.42854 14.25 4.42857H17.5C18.8807 4.42857 20 5.57984 20 7V16.4286C20 17.8487 18.8807 19 17.5 19ZM8.555 2.71429C8.13449 2.71398 7.77964 3.03596 7.7275 3.46514L7.64 4.18857C7.63285 4.24941 7.65137 4.31049 7.69087 4.35636C7.73038 4.40224 7.78709 4.42852 7.84667 4.42857H12.1533C12.2129 4.42852 12.2696 4.40224 12.3091 4.35636C12.3486 4.31049 12.3672 4.24941 12.36 4.18857L12.2725 3.46514C12.2204 3.03596 11.8655 2.71398 11.445 2.71429H8.555ZM4.375 9.14286C4.375 8.78782 4.65482 8.5 5 8.5H15C15.3452 8.5 15.625 8.78782 15.625 9.14286V9.57143C15.625 9.92647 15.3452 10.2143 15 10.2143H5C4.65482 10.2143 4.375 9.92647 4.375 9.57143V9.14286ZM5 13.2143C4.65482 13.2143 4.375 13.5021 4.375 13.8571V14.2857C4.375 14.6408 4.65482 14.9286 5 14.9286H15C15.3452 14.9286 15.625 14.6408 15.625 14.2857V13.8571C15.625 13.5021 15.3452 13.2143 15 13.2143H5Z" />
  </svg>,
  business: <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 19H2.5C1.11929 19 0 17.8487 0 16.4286V7C0 5.57984 1.11929 4.42857 2.5 4.42857H5.75C5.85409 4.42726 5.94127 4.34711 5.95417 4.24086L6.07417 3.25257C6.23052 1.96566 7.29411 0.999934 8.555 1H11.445C12.7049 1.00123 13.7671 1.96664 13.9233 3.25257L14.0433 4.24086C14.0564 4.34807 14.145 4.42854 14.25 4.42857H17.5C18.8807 4.42857 20 5.57984 20 7V16.4286C20 17.8487 18.8807 19 17.5 19ZM8.555 2.71429C8.13449 2.71398 7.77964 3.03596 7.7275 3.46514L7.64 4.18857C7.63285 4.24941 7.65137 4.31049 7.69087 4.35636C7.73038 4.40224 7.78709 4.42852 7.84667 4.42857H12.1533C12.2129 4.42852 12.2696 4.40224 12.3091 4.35636C12.3486 4.31049 12.3672 4.24941 12.36 4.18857L12.2725 3.46514C12.2204 3.03596 11.8655 2.71398 11.445 2.71429H8.555ZM4.375 9.14286C4.375 8.78782 4.65482 8.5 5 8.5H15C15.3452 8.5 15.625 8.78782 15.625 9.14286V9.57143C15.625 9.92647 15.3452 10.2143 15 10.2143H5C4.65482 10.2143 4.375 9.92647 4.375 9.57143V9.14286ZM5 13.2143C4.65482 13.2143 4.375 13.5021 4.375 13.8571V14.2857C4.375 14.6408 4.65482 14.9286 5 14.9286H15C15.3452 14.9286 15.625 14.6408 15.625 14.2857V13.8571C15.625 13.5021 15.3452 13.2143 15 13.2143H5Z" />
  </svg>,
  health: <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5204 0.00597071 19.994 4.47963 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM2.29167 10C2.29167 14.2572 5.74281 17.7083 10 17.7083C14.2553 17.7037 17.7037 14.2553 17.7083 10C17.7083 5.74281 14.2572 2.29167 10 2.29167C5.74281 2.29167 2.29167 5.74281 2.29167 10Z" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.54199 10C3.54199 6.43318 6.43349 3.54169 10.0003 3.54169C13.5655 3.54582 16.4545 6.43489 16.4587 10C16.4587 13.5669 13.5672 16.4584 10.0003 16.4584C6.43349 16.4584 3.54199 13.5669 3.54199 10ZM13.3337 11.25C13.5638 11.25 13.7503 11.0635 13.7503 10.8334V9.16669C13.7503 8.93657 13.5638 8.75002 13.3337 8.75002H11.667C11.4369 8.75002 11.2503 8.56347 11.2503 8.33335V6.66669C11.2503 6.43657 11.0638 6.25002 10.8337 6.25002H9.16699C8.93687 6.25002 8.75033 6.43657 8.75033 6.66669V8.33335C8.75033 8.56347 8.56378 8.75002 8.33366 8.75002H6.66699C6.43687 8.75002 6.25033 8.93657 6.25033 9.16669V10.8334C6.25033 11.0635 6.43687 11.25 6.66699 11.25H8.33366C8.56378 11.25 8.75033 11.4366 8.75033 11.6667V13.3334C8.75033 13.5635 8.93687 13.75 9.16699 13.75H10.8337C11.0638 13.75 11.2503 13.5635 11.2503 13.3334V11.6667C11.2503 11.4366 11.4369 11.25 11.667 11.25H13.3337Z" />
  </svg>,
  science: <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M9.95136 6.57833C10.0799 6.50382 10.159 6.36546 10.1585 6.21583L10.1519 5.41667C10.1519 5.18655 9.96716 5 9.73923 5H7.85976C7.50889 4.99999 7.19636 5.22394 7.08057 5.55833L2.84208 17.7792C2.79795 17.9066 2.81772 18.0477 2.89511 18.1578C2.97251 18.2679 3.09795 18.3333 3.23167 18.3333H13.7904C14.2462 18.3333 14.6158 18.7064 14.6158 19.1667C14.6158 19.6269 14.2462 20 13.7904 20H2.65141C2.11657 20.0002 1.61479 19.7388 1.30505 19.2986C0.9953 18.8584 0.915973 18.294 1.0922 17.7842L6.4871 2.22417C6.63799 1.7897 7.10917 1.56099 7.5395 1.71333C7.96984 1.86567 8.19637 2.34137 8.04548 2.77583C7.99985 2.9041 8.01923 3.04678 8.09738 3.1579C8.17553 3.26903 8.30257 3.33454 8.43755 3.33333H9.74583C9.97377 3.33333 10.1585 3.14679 10.1585 2.91667V1.25C10.1585 0.559644 10.7129 0 11.3967 0H13.8729C14.5567 0 15.111 0.559644 15.111 1.25V2.91667C15.111 3.14679 15.2958 3.33333 15.5237 3.33333H16.3491C16.805 3.33333 17.1746 3.70643 17.1746 4.16667C17.1746 4.6269 16.805 5 16.3491 5H15.5237C15.2958 5 15.111 5.18655 15.111 5.41667V6.21583C15.1108 6.36563 15.1902 6.50403 15.319 6.57833C16.9807 7.53453 18.0048 9.31899 18 11.25C18 14.2415 15.5979 16.6667 12.6348 16.6667C9.67167 16.6667 7.26959 14.2415 7.26959 11.25C7.26512 9.31886 8.28946 7.53445 9.95136 6.57833ZM9.95219 11.6667C9.95219 12.0118 10.2293 12.2917 10.5712 12.2917C10.9131 12.2917 11.1903 12.0118 11.1903 11.6667C11.1903 11.3215 10.9131 11.0417 10.5712 11.0417C10.2293 11.0417 9.95219 11.3215 9.95219 11.6667ZM12.8411 14.375C12.4992 14.375 12.2221 14.0952 12.2221 13.75C12.2221 13.4048 12.4992 13.125 12.8411 13.125C13.183 13.125 13.4602 13.4048 13.4602 13.75C13.4602 13.9165 13.3944 14.0761 13.2774 14.1934C13.1604 14.3108 13.0019 14.3761 12.837 14.375H12.8411ZM13.6665 11.8275C13.6665 12.4028 14.1285 12.8692 14.6983 12.8692C15.2678 12.8682 15.7292 12.4024 15.7301 11.8275C15.7301 11.2522 15.2681 10.7858 14.6983 10.7858C14.1285 10.7858 13.6665 11.2522 13.6665 11.8275ZM11.8094 2.08333C11.8094 1.85321 11.9941 1.66667 12.2221 1.66667H13.0475C13.2754 1.66667 13.4602 1.85321 13.4602 2.08333V2.91667C13.4602 3.14679 13.2754 3.33333 13.0475 3.33333H12.2221C11.9941 3.33333 11.8094 3.14679 11.8094 2.91667V2.08333ZM13.4602 5.41667C13.4602 5.18655 13.2754 5 13.0475 5H12.2221C11.9941 5 11.8094 5.18655 11.8094 5.41667V7C11.8088 7.34367 11.5994 7.65177 11.2819 7.77583C10.3803 8.12779 9.65013 8.82074 9.24646 9.7075C9.21766 9.7721 9.22321 9.84703 9.26121 9.90659C9.29921 9.96615 9.36448 10.0022 9.43465 10.0025H15.8316C15.9018 10.0024 15.9671 9.96628 16.005 9.90662C16.0429 9.84696 16.0482 9.77195 16.019 9.7075C15.6158 8.8209 14.8858 8.12815 13.9843 7.77667C13.6679 7.65142 13.4599 7.34315 13.4602 7V5.41667Z" />
  </svg>,
  sports: <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M0 10C0 4.47715 4.47715 0 10 0C15.5204 0.00597071 19.994 4.47963 20 10C20 15.5228 15.5228 20 10 20C4.47715 20 0 15.5228 0 10ZM11.0942 3.08583C10.9418 3.15231 10.8436 3.30296 10.8442 3.46917L10.84 5.62833C10.8397 5.76169 10.9032 5.88715 11.0108 5.96583L13.9275 8.0875C14.0568 8.18196 14.2288 8.19395 14.37 8.11833L15.9817 7.25417C16.1063 7.18731 16.1885 7.0618 16.2 6.92083L16.4325 4.29417C16.4429 4.17472 16.4013 4.0566 16.3183 3.97C15.583 3.1978 14.7133 2.56584 13.7517 2.105C13.6436 2.05326 13.5185 2.05053 13.4083 2.0975L11.0942 3.08583ZM3.69917 3.94917C4.43294 3.18332 5.29945 2.55681 6.25667 2.1C6.36471 2.04826 6.4898 2.04553 6.6 2.0925L8.92417 3.08333C9.0765 3.14981 9.17475 3.30046 9.17417 3.46667V5.62917C9.17299 5.7612 9.10931 5.88487 9.0025 5.9625L6.16917 8.0275C6.04433 8.11899 5.87907 8.13375 5.74 8.06583L4.04917 7.24C3.91787 7.17602 3.82966 7.04797 3.81667 6.9025L3.58333 4.27417C3.57317 4.15419 3.61541 4.03567 3.69917 3.94917ZM5.53417 14.81L6.47333 13.7617C6.57054 13.6518 6.60282 13.4989 6.55833 13.3592L5.49417 10.0708C5.46077 9.96854 5.38911 9.88314 5.29417 9.8325L3.54417 8.89333C3.37275 8.80111 3.16032 8.83986 3.0325 8.98667L1.42833 10.8333C1.35232 10.9231 1.31781 11.0409 1.33333 11.1575C1.47175 12.2024 1.79932 13.2133 2.3 14.1408C2.35708 14.2461 2.45665 14.3216 2.57333 14.3483L5.13 14.9375C5.27789 14.9718 5.43273 14.923 5.53417 14.81ZM13.14 16.2617L11.8575 18.4092C11.7959 18.5126 11.6926 18.5843 11.5742 18.6058C10.5436 18.7933 9.48775 18.7947 8.45667 18.61C8.33794 18.5887 8.23429 18.5169 8.1725 18.4133L6.885 16.265C6.7911 16.1082 6.81036 15.9085 6.9325 15.7725L7.87083 14.725C7.95004 14.6368 8.06309 14.5864 8.18167 14.5867H11.8425C11.9611 14.5864 12.0741 14.6368 12.1533 14.725L13.0908 15.7725C13.2126 15.9083 13.2318 16.1075 13.1383 16.2642L13.14 16.2617ZM17.4283 14.3458C17.545 14.3191 17.6446 14.2436 17.7017 14.1383L17.7 14.1408C18.2014 13.2148 18.5301 12.2053 18.67 11.1617C18.6858 11.0432 18.65 10.9236 18.5717 10.8333L16.97 8.98C16.8423 8.83361 16.6304 8.79489 16.4592 8.88667L14.7092 9.82583C14.6142 9.87647 14.5426 9.96188 14.5092 10.0642L13.445 13.3525C13.3985 13.4932 13.4302 13.6481 13.5283 13.7592L14.4675 14.8075C14.5689 14.9205 14.7238 14.9693 14.8717 14.935L17.4283 14.3458Z" />
  </svg>,
  technology: <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M18.125 1.45831H1.875C0.840037 1.45969 0.0013772 2.29835 0 3.33331V12.5C0.0013772 13.5349 0.840037 14.3736 1.875 14.375H8.54167C8.77179 14.375 8.95833 14.5615 8.95833 14.7916V16.0416C8.95833 16.2718 8.77179 16.4583 8.54167 16.4583H6.04167C5.46637 16.4583 5 16.9247 5 17.5C5 18.0753 5.46637 18.5416 6.04167 18.5416H13.9583C14.5336 18.5416 15 18.0753 15 17.5C15 16.9247 14.5336 16.4583 13.9583 16.4583H11.4583C11.2282 16.4583 11.0417 16.2718 11.0417 16.0416V14.7916C11.0417 14.5615 11.2282 14.375 11.4583 14.375H18.125C19.16 14.3736 19.9986 13.5349 20 12.5V3.33331C19.9986 2.29835 19.16 1.45969 18.125 1.45831ZM17.9167 11.875C17.9167 12.1051 17.7301 12.2916 17.5 12.2916H2.5C2.26988 12.2916 2.08333 12.1051 2.08333 11.875V3.95831C2.08333 3.72819 2.26988 3.54165 2.5 3.54165H17.5C17.7301 3.54165 17.9167 3.72819 17.9167 3.95831V11.875Z" />
  </svg>,
  favorites: <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="20px" height="20px" fill="currentColor"><path d="M 12.8125 2 C 12.335938 2.089844 11.992188 2.511719 12 3 L 12 47 C 11.996094 47.359375 12.1875 47.691406 12.496094 47.871094 C 12.804688 48.054688 13.1875 48.054688 13.5 47.875 L 25 41.15625 L 36.5 47.875 C 36.8125 48.054688 37.195313 48.054688 37.503906 47.871094 C 37.8125 47.691406 38.003906 47.359375 38 47 L 38 3 C 38 2.449219 37.550781 2 37 2 L 13 2 C 12.96875 2 12.9375 2 12.90625 2 C 12.875 2 12.84375 2 12.8125 2 Z M 14 4 L 36 4 L 36 45.25 L 25.5 39.125 C 25.191406 38.945313 24.808594 38.945313 24.5 39.125 L 14 45.25 Z"/></svg>  
}

export default categoryIcons