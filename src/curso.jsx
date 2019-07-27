import React from 'react'

const Curso = () => (
    <article className="card">
    <div className="img-container s-ratio-16-9 s-radius-tr s-radius-tl">
      <img src="https://drupal.ed.team/sites/default/files/styles/medium/public/imagenes-cdn-edteam/2019-01/Android%20Kotlin.png?itok=q7Du9KgK" alt="curso kotlin" />
    </div>
    <div className="card__data s-border s-radius-br s-radius-bl s-pxy-2">
      <h3 className="t5 s-mb-2 s-center">
        Kotlin Android
      </h3>
      <div className="s-mb-2 s-main-center">
        <div className="card__teacher s-cross-center">
          <div className="card__avatar s-mr-1">
            <div className="circle img-container">
              <img src="https://nationalpostcom.files.wordpress.com/2015/05/celeb_roundtable_20150507_37848281.jpg?quality=80&strip=all&w=780" alt="marge" />
            </div>
          </div>
          <span className="small">Alejandra Ramirez</span>
        </div>
      </div>
      <div className="s-main-center">
        <a className="button--ghost-alert button--tiny" href="#">$ 20USD</a>
      </div>
    </div>
  </article>
)

export default Curso