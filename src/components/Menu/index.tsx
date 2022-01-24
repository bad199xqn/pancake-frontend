import React from 'react'

import ConnectWalletButton from 'components/ConnectWalletButton'

// import { useRouter } from 'next/router'
// import { NextLinkFromReactRouter } from 'components/NextLink'
// import { Menu as UikitMenu } from '@pancakeswap/uikit'
// import { languageList } from 'config/localization/languages'
// import { useTranslation } from 'contexts/Localization'
// import useTheme from 'hooks/useTheme'
// import { usePriceCakeBusd } from 'state/farms/hooks'
// import config from './config/config'
// import UserMenu from './UserMenu'
// import GlobalSettings from './GlobalSettings'
// import { getActiveMenuItem, getActiveSubMenuItem } from './utils'

const padding = {padding:'3px'}

const Menu = (props) => {
  return (
    <>
      <div>
        <a href="/swap" style={padding}>Swap</a>
        <a href="/farms" style={padding}>Farms</a>
        <a href="/pools" style={padding}>Pools</a>
        <ConnectWalletButton />
      </div>
      <div>
        {props.children}
      </div>
    </>
  )
  // const { isDark, toggleTheme } = useTheme()
  // const cakePriceUsd = usePriceCakeBusd()
  // const { currentLanguage, setLanguage, t } = useTranslation()
  // const { pathname } = useRouter()

  // const activeMenuItem = getActiveMenuItem({ menuConfig: config(t), pathname })
  // const activeSubMenuItem = getActiveSubMenuItem({ menuItem: activeMenuItem, pathname })

  // return (
  //   <UikitMenu
  //     linkComponent={(linkProps) => {
  //       return <NextLinkFromReactRouter to={linkProps.href} {...linkProps} />
  //     }}
  //     userMenu={<UserMenu />}
  //     globalMenu={<GlobalSettings />}
  //     isDark={isDark}
  //     toggleTheme={toggleTheme}
  //     currentLang={currentLanguage.code}
  //     langs={languageList}
  //     setLang={setLanguage}
  //     cakePriceUsd={cakePriceUsd.toNumber()}
  //     links={config(t)}
  //     subLinks={activeMenuItem?.hideSubNav ? [] : activeMenuItem?.items}
  //     activeItem={activeMenuItem?.href}
  //     activeSubItem={activeSubMenuItem?.href}
  //     {...props}
  //   />
  // )
}

export default Menu
