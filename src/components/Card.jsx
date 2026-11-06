function Card() {
  return (
    <article class="b-card">
      <div class="card-header">
        <span class="tag tag-yellow">ILUMINACIÓN</span>
        <span class="mono" style="font-size: 0.8rem; font-weight: 700;">
          ART-101
        </span>
      </div>
      <div class="item-img-container">
        <img
          src="../img/lampara-hormigon.jpg"
          alt="Lámpara Cilíndrica de Hormigón"
          class="item-img"
        />
      </div>
      <div class="card-body">
        <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 0.4rem;">
          <h2 class="item-title">Lámpara Cilíndrica de Hormigón</h2>
          <span class="item-price">$68.00</span>
        </div>
        <p class="item-desc">
          Luminaria de sobremesa con base moldeada en cemento pulido y bombilla
          cálida de filamento visible.
        </p>
        <table class="specs-table">
          <tr>
            <td>MATERIAL:</td>
            <td>Hormigón & Latón</td>
          </tr>
          <tr>
            <td>DIMENSIONES:</td>
            <td>12 x 12 x 22 cm</td>
          </tr>
          <tr>
            <td>DISPONIBILIDAD:</td>
            <td>En Stock (14 un.)</td>
          </tr>
        </table>
      </div>
      <div class="card-footer">
        <span class="mono" style="font-size: 0.78rem;">
          GARANTÍA: 2 AÑOS
        </span>
        <a href="detalle-producto.html" class="btn btn-sm btn-primary">
          Adquirir
        </a>
      </div>
    </article>
  );
}

export default Card;
