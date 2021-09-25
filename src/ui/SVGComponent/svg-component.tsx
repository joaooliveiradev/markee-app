import { theme } from 'resources/theme'
import styled, { keyframes } from 'styled-components/macro'
type DeleteIconSVGProps = {
  width: string,
  height: string,
}
type WhiteFileSVGProps = {
  width: string,
  height: string,
  opacity: string
  className: string,
}
type BlueFileSVGProps = {
  width: string,
  height: string,
  className?: string,
}
type LogoSVGProps = {
  width: string,
  height: string,
}
type PlusSymbolSVGProps = {
  width: string,
  height: string,
  className: string,
}
type EditingIconSVGProps = {
  width: string,
  height: string,
}
type SavedIconSVGProps = {
  width: string,
  height: string,
  className?: string,
}
type SavingIconSVGProps = {
  width: string,
  height: string,
  className?: string
}
const DeleteIconSVG = ({ width, height }: DeleteIconSVGProps) => (
  <svg width={width} height={height} viewBox='0 0 11 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M1.5 0.880615L9.18 8.56061M9.5 0.880615L1.82 8.56061' stroke='#FFF' />
  </svg>
)
const WhiteFileSVG = ({ width, height, opacity, className }: WhiteFileSVGProps) => {
  return (
    <svg width={width} height={height} className={className} viewBox='0 0 24 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M14 2.88062H6C5.46957 2.88062 4.96086 3.09133 4.58579 3.4664C4.21071 3.84147 4 4.35018 4 4.88062V20.8806C4 21.411 4.21071 21.9198 4.58579 22.2948C4.96086 22.6699 5.46957 22.8806 6 22.8806H18C18.5304 22.8806 19.0391 22.6699 19.4142 22.2948C19.7893 21.9198 20 21.411 20 20.8806V8.88062L14 2.88062Z' stroke='white' strokeOpacity={opacity} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M14 2.88062V8.88062H20' stroke='white' strokeOpacity={opacity} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M16 13.8806H8' stroke='white' strokeOpacity={opacity} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M16 17.8806H8' stroke='white' strokeOpacity={opacity} strokeLinecap='round' strokeLinejoin='round' />
      <path d='M10 9.88062H9H8' stroke='white' strokeOpacity={opacity} strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}
const BlueFileSVG = ({ width, height, className }: BlueFileSVGProps) => (
  <svg width={width} height={height} className={className} viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z' stroke={theme.colors.primary} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M14 2V8H20' stroke={theme.colors.primary} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16 13H8' stroke={theme.colors.primary} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M16 17H8' stroke={theme.colors.primary} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M10 9H9H8' stroke={theme.colors.primary} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const LogoSVG = ({ width, height }: LogoSVGProps) => (
  <svg width={width} height={height} viewBox='0 0 164 45' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M50.982 34V17.2153H54.8059L55.1781 19.4826C55.7196 18.6704 56.4302 18.0274 57.3101 17.5537C58.2125 17.0573 59.2502 16.8092 60.4234 16.8092C63.0178 16.8092 64.8564 17.8131 65.9393 19.821C66.5484 18.896 67.3606 18.1628 68.3758 17.6213C69.4136 17.0799 70.5416 16.8092 71.7598 16.8092C73.9481 16.8092 75.6289 17.4634 76.802 18.7719C77.9751 20.0804 78.5617 21.998 78.5617 24.5247V34H74.2301V24.9308C74.2301 23.487 73.9481 22.3815 73.3841 21.6145C72.8427 20.8474 71.9967 20.4639 70.8461 20.4639C69.673 20.4639 68.7255 20.8926 68.0035 21.7498C67.3042 22.6071 66.9545 23.8028 66.9545 25.3369V34H62.623V24.9308C62.623 23.487 62.341 22.3815 61.777 21.6145C61.213 20.8474 60.3444 20.4639 59.1713 20.4639C58.0207 20.4639 57.0845 20.8926 56.3625 21.7498C55.6632 22.6071 55.3135 23.8028 55.3135 25.3369V34H50.982ZM85.7535 34.4061C84.3096 34.4061 83.1252 34.1805 82.2003 33.7292C81.2753 33.2555 80.5872 32.6351 80.136 31.868C79.6848 31.101 79.4592 30.255 79.4592 29.33C79.4592 27.7734 80.0683 26.51 81.2866 25.5399C82.5048 24.5699 84.3322 24.0848 86.7687 24.0848H91.0325V23.6787C91.0325 22.5282 90.7054 21.6822 90.0512 21.1407C89.3969 20.5993 88.5848 20.3286 87.6147 20.3286C86.7349 20.3286 85.9678 20.5429 85.3136 20.9715C84.6593 21.3776 84.2532 21.9867 84.0953 22.7989H79.8653C79.9781 21.5806 80.3842 20.5203 81.0835 19.6179C81.8055 18.7155 82.7304 18.0274 83.8584 17.5537C84.9864 17.0573 86.2498 16.8092 87.6485 16.8092C90.0399 16.8092 91.9237 17.407 93.2998 18.6027C94.676 19.7984 95.3641 21.4904 95.3641 23.6787V34H91.6755L91.2694 31.2928C90.7731 32.1952 90.0737 32.9396 89.1713 33.5262C88.2915 34.1128 87.1522 34.4061 85.7535 34.4061ZM86.7349 31.022C87.9757 31.022 88.9345 30.616 89.6113 29.8038C90.3106 28.9916 90.7505 27.9877 90.931 26.792H87.2425C86.0919 26.792 85.2684 27.0063 84.7721 27.435C84.2758 27.8411 84.0276 28.3487 84.0276 28.9578C84.0276 29.612 84.2758 30.1196 84.7721 30.4806C85.2684 30.8416 85.9227 31.022 86.7349 31.022ZM96.7904 34V17.2153H100.648L101.054 20.3624C101.663 19.2795 102.487 18.4222 103.525 17.7905C104.585 17.1363 105.826 16.8092 107.247 16.8092V21.3776H106.029C105.081 21.3776 104.235 21.5242 103.491 21.8175C102.746 22.1108 102.16 22.6184 101.731 23.3403C101.325 24.0622 101.122 25.0662 101.122 26.3521V34H96.7904ZM107.5 34V9.63507H111.832V24.0171L117.788 17.2153H122.931L116.062 24.8631L124.048 34H118.634L111.832 25.5738V34H107.5ZM130.794 34.4061C129.102 34.4061 127.602 34.0451 126.293 33.3232C124.985 32.6012 123.958 31.586 123.214 30.2776C122.469 28.9691 122.097 27.4575 122.097 25.743C122.097 24.0058 122.458 22.4605 123.18 21.1069C123.924 19.7533 124.94 18.7042 126.225 17.9597C127.534 17.1927 129.068 16.8092 130.828 16.8092C132.475 16.8092 133.93 17.1701 135.193 17.8921C136.456 18.614 137.438 19.6066 138.137 20.87C138.859 22.1108 139.22 23.4982 139.22 25.0323C139.22 25.2805 139.209 25.5399 139.186 25.8107C139.186 26.0814 139.175 26.3634 139.152 26.6567H126.395C126.485 27.9651 126.936 28.9916 127.748 29.7361C128.583 30.4806 129.587 30.8528 130.76 30.8528C131.64 30.8528 132.373 30.6611 132.96 30.2776C133.569 29.8715 134.02 29.3526 134.313 28.7209H138.713C138.397 29.7812 137.866 30.7513 137.122 31.6312C136.4 32.4884 135.498 33.1652 134.415 33.6616C133.354 34.1579 132.148 34.4061 130.794 34.4061ZM130.828 20.3286C129.767 20.3286 128.831 20.6331 128.019 21.2422C127.207 21.8288 126.688 22.7312 126.462 23.9494H134.821C134.753 22.844 134.347 21.9642 133.603 21.3099C132.858 20.6557 131.933 20.3286 130.828 20.3286ZM148.311 34.4061C146.619 34.4061 145.119 34.0451 143.811 33.3232C142.502 32.6012 141.476 31.586 140.731 30.2776C139.987 28.9691 139.615 27.4575 139.615 25.743C139.615 24.0058 139.976 22.4605 140.697 21.1069C141.442 19.7533 142.457 18.7042 143.743 17.9597C145.052 17.1927 146.586 16.8092 148.345 16.8092C149.992 16.8092 151.447 17.1701 152.711 17.8921C153.974 18.614 154.955 19.6066 155.655 20.87C156.377 22.1108 156.738 23.4982 156.738 25.0323C156.738 25.2805 156.726 25.5399 156.704 25.8107C156.704 26.0814 156.693 26.3634 156.67 26.6567H143.912C144.002 27.9651 144.454 28.9916 145.266 29.7361C146.101 30.4806 147.105 30.8528 148.278 30.8528C149.157 30.8528 149.891 30.6611 150.477 30.2776C151.086 29.8715 151.538 29.3526 151.831 28.7209H156.23C155.914 29.7812 155.384 30.7513 154.64 31.6312C153.918 32.4884 153.015 33.1652 151.932 33.6616C150.872 34.1579 149.665 34.4061 148.311 34.4061ZM148.345 20.3286C147.285 20.3286 146.349 20.6331 145.537 21.2422C144.724 21.8288 144.206 22.7312 143.98 23.9494H152.338C152.271 22.844 151.865 21.9642 151.12 21.3099C150.376 20.6557 149.451 20.3286 148.345 20.3286Z' fill='#FAFAFA' />
    <path d='M159.535 34.2369C158.745 34.2369 158.091 33.9887 157.572 33.4924C157.076 32.996 156.828 32.3982 156.828 31.6988C156.828 30.9769 157.076 30.3678 157.572 29.8715C158.091 29.3752 158.745 29.127 159.535 29.127C160.324 29.127 160.967 29.3752 161.464 29.8715C161.983 30.3678 162.242 30.9769 162.242 31.6988C162.242 32.3982 161.983 32.996 161.464 33.4924C160.967 33.9887 160.324 34.2369 159.535 34.2369Z' fill='url(#paint0_linear)' />
    <path d='M0 39.9821V14.5029V4.37622C0 3.55665 0.926716 3.08024 1.59323 3.55717L17.3594 14.8389C17.7099 15.0896 18.1811 15.0896 18.5316 14.8389L34.2978 3.55717C34.9643 3.08024 35.8911 3.55665 35.8911 4.37622V39.9371C35.8911 40.8772 34.7171 41.3047 34.1126 40.5847L24.9553 29.6776C24.5811 29.232 23.9083 29.1952 23.4878 29.5973L18.656 34.2182C18.2609 34.596 17.6364 34.5897 17.2491 34.2038L12.6482 29.6205C12.2332 29.2071 11.5543 29.2337 11.1729 29.6783L1.77157 40.6378C1.1629 41.3474 0 40.9169 0 39.9821Z' fill='url(#paint1_linear)' />
    <defs>
      <linearGradient id='paint0_linear' x1='106.391' y1='-3.05176e-05' x2='106.391' y2='44.3144' gradientUnits='userSpaceOnUse'>
        <stop stopColor='#2DD4BF' />
        <stop offset='1' stopColor='#22D3EE' />
      </linearGradient>
      <linearGradient id='paint1_linear' x1='17.6468' y1='6.07947' x2='17.6468' y2='42.703' gradientUnits='userSpaceOnUse'>
        <stop stopColor='#2DD4BF' />
        <stop offset='1' stopColor='#22D3EE' />
      </linearGradient>
    </defs>
  </svg>
)
const PlusSymbolSVG = ({ width, height, className }: PlusSymbolSVGProps) => (
  <svg width={width} height={height} className={className} viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M5.66663 1V10.3333' stroke={theme.colors.lightBlack} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
    <path d='M1 5.66669H10.3333' stroke={theme.colors.lightBlack} strokeWidth='1.5' strokeLinecap='round' strokeLinejoin='round' />
  </svg>
)
const EditingIconSVG = ({ width, height }: EditingIconSVGProps) => {
  return (
    <svg width={width} height={height} viewBox='0 0 8 9' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <circle cx='4' cy='4.68555' r='4' fill={theme.colors.primary} />
    </svg>
  )
}
const SavedIconSVG = ({ width, height, className }: SavedIconSVGProps) => {
  return (
    <svg className={className} width={width} height={height} viewBox='0 0 14 10' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M13 1L4.75 9.25L1 5.5' stroke={theme.colors.primary} strokeLinecap='round' strokeLinejoin='round' />
    </svg>
  )
}
const SavingIconSVG = ({ width, height, className }: SavingIconSVGProps) => {
  return (
    <svg className={className} width={width} height={height} viewBox='0 0 13 13' fill='none' xmlns='http://www.w3.org/2000/svg'>
      <path d='M6.72796 12.5C7.0041 12.5 7.22796 12.2761 7.22796 12C7.22796 11.7239 7.0041 11.5 6.72796 11.5V12.5ZM6.72796 1L6.73143 0.5H6.72796V1ZM11.4394 7.43558C11.4037 7.70941 11.5968 7.96029 11.8706 7.99594C12.1445 8.03159 12.3954 7.8385 12.431 7.56467L11.4394 7.43558ZM6.72796 11.5C3.8213 11.5 1.5 9.24248 1.5 6.5H0.5C0.5 9.83265 3.30768 12.5 6.72796 12.5V11.5ZM1.5 6.5C1.5 3.75752 3.8213 1.5 6.72796 1.5V0.5C3.30768 0.5 0.5 3.16735 0.5 6.5H1.5ZM6.72449 1.49999C8.10469 1.50956 9.39878 2.07832 10.2879 3.08833C11.1723 4.09284 11.6829 5.56502 11.4394 7.43558L12.431 7.56467C12.7082 5.43522 12.1304 3.66785 11.0385 2.42756C9.95148 1.19276 8.38159 0.511459 6.73143 0.500012L6.72449 1.49999Z' fill={theme.colors.primary} />
    </svg>
  )
}

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(359deg);
  }
`

const dash = keyframes`
  100% {
    stroke-dashoffset: 0;
  }
  0% {
    stroke-dashoffset: 100;
  }
`
const StyledSavingIconSVG = styled(SavingIconSVG)`
    animation: ${rotate} 1s infinite linear;
`
const StyledSavedIconSVG = styled(SavedIconSVG)`
    stroke-dasharray: 100;
    stroke-dashoffset: 100;
    animation: ${dash} 3s ease-out forwards infinite;
`
export { WhiteFileSVG, BlueFileSVG, DeleteIconSVG, LogoSVG, PlusSymbolSVG, EditingIconSVG, StyledSavedIconSVG as SavedIconSVG, StyledSavingIconSVG as SavingIconSVG }
