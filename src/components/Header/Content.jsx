
const text = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23'];
const marks = ['1','2','3','4','5','6','7','8','9']
const Content = () => {

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
                 <img src='images/chat/all.svg' alt="" />
            </div>
            <div className="scroll">
              <img src="images/scroll.svg" alt="" />
            </div>
            <div className="text">
              {text.map((txt)=>(
                <img key={txt} src={`images/text/${txt}.svg`} alt="" />
              ))}
            </div>
            </div>
          </div>
        </div>
        <div className="keyboard">
          <img src="images/keyboard/keyboard.svg" alt="" />
          {marks.map((mark)=>(
            <img key={mark} src={`images/keyboard/${mark}.svg`} alt="" className="mark" />
          ))}
          <img src="images/keyboard/leftHand.svg" alt="" className="hand left" />
          <img src="images/keyboard/rightHand.svg" alt="" className="hand right" />
        </div>
      </div>
    </div>
  )
}

export default Content
