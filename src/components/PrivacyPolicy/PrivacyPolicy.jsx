// src/components/PrivacyPolicy/PrivacyPolicy.jsx
import React from "react";
import "./PrivacyPolicy.scss";

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy">
      <h1 className="title">Política de Privacidad de Mijuy</h1>
      <section>
        <h2>Introducción</h2>
        <p>
          En Mijuy, tu confianza es nuestra prioridad. Nos comprometemos a
          proteger tu información personal y garantizar una experiencia segura
          en nuestro sitio web. Al utilizar nuestros servicios, aceptas los
          términos descritos en esta Política de Privacidad.
        </p>
      </section>
      <section>
        <h2>Información Recogida</h2>
        <p>
          Recopilamos datos personales necesarios para procesar tus pedidos,
          tales como:
        </p>
        <ul>
          <li>Nombre</li>
          <li>Dirección de entrega</li>
          <li>Número de WhatsApp</li>
          <li>Información para emicion de boleta (como DNI)</li>
        </ul>
        <p>
          No solicitamos más datos de los necesarios para ofrecerte el mejor
          servicio.
        </p>
      </section>
      <section>
        <h2>Uso de la Información</h2>
        <p>
          La información que nos proporcionas se utiliza exclusivamente para:
        </p>
        <ul>
          <li>Procesar tus pedidos y realizar entregas de manera eficiente</li>
          <li>
            Mantenerte informado sobre ofertas, promociones y novedades de Mijuy
          </li>
          <li>
            Mejorar nuestros servicios y personalizar tu experiencia con
            nosotros
          </li>
        </ul>
        <p>
          Puedes optar por no recibir correos electrónicos promocionales en
          cualquier momento.
        </p>
      </section>
      <section>
        <h2>Seguridad de la Información</h2>
        <p>
          En Mijuy, implementamos tecnologías avanzadas para proteger tu
          información personal y prevenir accesos no autorizados. Tus datos
          están seguros con nosotros y no serán compartidos sin tu
          consentimiento, salvo que la ley lo requiera.
        </p>
      </section>
      <section>
        <h2>No Usamos Cookies</h2>
        <p>
          A diferencia de muchos sitios web, Mijuy no utiliza cookies. Esto
          significa que:
        </p>
        <ul>
          <li>
            Tu privacidad está completamente garantizada: No rastreamos tu
            comportamiento en línea
          </li>
          <li>
            Navegación más rápida y ligera: Sin cookies, nuestra página carga de
            manera más eficiente
          </li>
          <li>
            Mayor control sobre tu información: No almacenamos datos en tu
            dispositivo ni recopilamos información adicional sin tu conocimiento
          </li>
        </ul>
      </section>
      <section>
        <h2>Enlaces a Terceros</h2>
        <p>
          Nuestro sitio podría contener enlaces a sitios externos, como
          plataformas de pago o redes sociales. Una vez que accedas a estos
          enlaces, Mijuy no tiene control sobre las políticas de privacidad de
          dichos sitios. Te recomendamos revisar sus términos antes de compartir
          información personal.
        </p>
      </section>
      <section>
        <h2>Control de tu Información Personal</h2>
        <p>
          Tienes total control sobre los datos que compartes con nosotros.
          Puedes restringir el uso de tu información personal en cualquier
          momento. Además, nos aseguramos de:
        </p>
        <ul>
          <li>
            No vender, ceder ni compartir tu información con terceros sin tu
            consentimiento
          </li>
          <li>
            Respetar tu decisión de cancelar la recepción de comunicaciones
            promocionales
          </li>
        </ul>
      </section>
      <section>
        <h2>Actualizaciones de la Política</h2>
        <p>
          Mijuy se reserva el derecho de actualizar esta Política de Privacidad
          para reflejar mejoras o cambios en nuestros servicios. Te recomendamos
          revisar esta página periódicamente para mantenerte informado.
        </p>
        <p>
          Si tienes alguna duda o consulta sobre nuestra Política de Privacidad,
          no dudes en contactarnos a través de nuestro sitio web o por WhatsApp.
        </p>
      </section>
    </div>
  );
}
