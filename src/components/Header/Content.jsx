

const Content = () => {
const chat = ['1','2','4','5','6','7','8','9','10','11','12','13','14']

return (
    <div className="container header-content">
      <div className="header-content-left">
        <h1>
          Школа <span>программирования</span> для тех, кому нужны реальные
          навыки,<br></br> а не просто сертификат
        </h1>
        <p>
          Пройдите тестирование, чтобы получить доступ к бесплатным вводным
          урокам
        </p>
        <a href="#">Пройти тестирование</a>
      </div>
      <div className="header-content-right">
        <div className="monitor">
          <div className="window">
            <div className="window-inside">
            <div className="chat">
              {chat.map((img, idx) => (
                 <img key={idx} src={`images/chat/${img}.svg`} alt="" />
              ))}
            </div>
            <div className="scroll">
              <img src="" alt="" />
            </div>
            <div className="text">
              <img src="" alt="" />
            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Content
