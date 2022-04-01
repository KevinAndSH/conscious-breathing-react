import ghLogo from "../assets/gh.png"

function Header() {
  return (
    <header>
      <div className="logo" />
      <a
        href="https://github.com/KevinAndSH/conscious-breathing-react"
        target="_blank"
        rel="noreferrer noopener"
      >
        <img src={ghLogo} alt="github repo" />
      </a>
    </header>
  )
}

export default Header