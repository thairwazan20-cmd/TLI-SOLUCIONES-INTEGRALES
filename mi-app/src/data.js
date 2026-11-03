import tecnico from './assets/tecnico.jpg'
import apple from './assets/apple.png'
import piezas from './assets/mantenimiento-laptops.png'
import optimizacion from './assets/optimizacion.png'
import consolas from './assets/consolas.jpg'
import impresiones from './assets/impresiones-3d.jpg'
import equipos from './assets/venta-equipos.jpg'
import redes from './assets/redes.png'
import camara from './assets/camara.png'

export const INFO = {
  address: 'QATUNA MERCADOS LOCAL 234',
  address2: 'Av. Isabel Chimpu Ocllo, Cdra. 10 S/N - Carabayllo',
  phone: '929 733 839',
  tel: 'tel:+51929733839',
  email: 'ventas.tulugarinteligente@gmail.com',
  wa: 'https://wa.me/51929733839',
  years: 21,
  map: 'https://www.google.com/maps?q=Mercado+Qatuna+Carabayllo+Lima&output=embed',
}

export const WA_DEFAULT = 'Hola, vengo de la página web y necesito un servicio.'

export const waLink = (msg = WA_DEFAULT) => `${INFO.wa}?text=${encodeURIComponent(msg)}`

export const SOCIALS = [
  { name: 'Facebook', href: 'https://www.facebook.com/search/top?q=Tu%20Lugar%20Inteligente' },
  { name: 'TikTok', href: 'https://www.tiktok.com/@tu.lugar.inteligente' },
  { name: 'YouTube', href: 'https://www.youtube.com/results?search_query=Tu+Lugar+Inteligente' },
]

export const CATEGORIES = ['Todos', 'Soporte técnico', 'Software', 'Productos', 'Redes']

export const SERVICES = [
  {
    slug: 'servicio-tecnico',
    icon: 'laptop',
    tag: 'Soporte técnico',
    title: 'Servicio Técnico de PC y Laptops',
    text: 'Diagnóstico y reparación especializada de hardware y software, incluida la reparación de placas.',
    img: tecnico,
    long: 'Tu computadora no enciende, se apaga sola, está lenta o tiene la pantalla dañada. Revisamos el equipo, te explicamos qué tiene y te damos una cotización antes de hacer cualquier trabajo.',
    includes: ['Diagnóstico de hardware y software', 'Reparación de placas madre', 'Eliminación de virus y recuperación del sistema', 'Instalación de programas y controladores', 'Recuperación de información'],
  },
  {
    slug: 'apple',
    icon: 'apple',
    tag: 'Soporte técnico',
    title: 'Especialistas Apple',
    text: 'MacBook, iMac, iPhone y iPad: reparación, migración de datos, instalación y mantenimiento.',
    img: apple,
    long: 'Más de 21 años trabajando con equipos Apple. Conocemos sus componentes y su sistema, por eso tu Mac o iPhone queda en manos de especialistas y no de improvisados.',
    includes: ['MacBook, iMac, Mac mini, iPhone y iPad', 'Reparación de placas y cambio de piezas', 'Instalación y actualización de macOS', 'Migración de datos y respaldos', 'Limpieza y mantenimiento interno'],
  },
  {
    slug: 'cambio-de-piezas',
    icon: 'chip',
    tag: 'Soporte técnico',
    title: 'Cambio de Piezas',
    text: 'Pantallas, teclados, baterías, discos SSD, memorias RAM, cargadores y más, con componentes de calidad.',
    img: piezas,
    long: 'Le damos una segunda vida a tu equipo cambiando lo que está fallando o mejorando lo que se quedó corto. Un SSD y más memoria RAM pueden hacer que tu laptop vuelva a sentirse nueva.',
    includes: ['Pantallas y teclados', 'Baterías y cargadores', 'Discos SSD y memorias RAM', 'Ventiladores y bisagras', 'Puertos y conectores de carga'],
  },
  {
    slug: 'mantenimiento',
    icon: 'gear',
    tag: 'Soporte técnico',
    title: 'Mantenimiento de Laptops y PCs',
    text: 'Limpieza interna, cambio de pasta térmica, formateo, actualización y optimización del rendimiento.',
    img: optimizacion,
    long: 'El polvo y el calor son los principales enemigos de tu equipo. Un buen mantenimiento evita fallas, baja la temperatura y alarga la vida de tu PC o laptop.',
    includes: ['Limpieza interna completa', 'Cambio de pasta térmica', 'Formateo e instalación del sistema', 'Optimización del rendimiento', 'Mantenimiento para empresas'],
  },
  {
    slug: 'consolas',
    icon: 'gamepad',
    tag: 'Soporte técnico',
    title: 'Mantenimiento de Consolas',
    text: 'PlayStation, Xbox y Nintendo: limpieza, cambio de pasta térmica, reparación de lectores y mandos.',
    img: consolas,
    long: '¿Tu consola suena como turbina o se apaga sola? Le hacemos mantenimiento completo para que vuelvas a jugar sin problemas.',
    includes: ['PlayStation 2, 3, 4 y 5', 'Xbox y Nintendo', 'Limpieza y cambio de pasta térmica', 'Reparación de lectores', 'Reparación de mandos'],
  },
  {
    slug: 'sistemas-sunat',
    icon: 'receipt',
    tag: 'Software',
    title: 'Sistemas a Medida con SUNAT',
    text: 'Facturación y boletas electrónicas, punto de venta e inventario, integrados con SUNAT.',
    long: 'Desarrollamos el sistema que tu negocio necesita: emite comprobantes electrónicos válidos ante SUNAT, controla tu inventario y revisa tus ventas desde un solo lugar.',
    includes: ['Facturas y boletas electrónicas', 'Punto de venta (POS)', 'Control de inventario y almacén', 'Reportes de ventas', 'Capacitación y soporte'],
  },
  {
    slug: 'paginas-web',
    icon: 'globe',
    tag: 'Software',
    title: 'Páginas Web',
    text: 'Webs para negocios, catálogos y tiendas online, adaptadas a celulares y listas para vender.',
    long: 'Tu negocio en internet, con una página rápida, moderna y que se ve bien en el celular, para que tus clientes te encuentren y te escriban directo por WhatsApp.',
    includes: ['Páginas para negocios', 'Catálogos de productos', 'Tiendas online', 'Diseño adaptado a celulares', 'Botón de WhatsApp y redes sociales'],
  },
  {
    slug: 'impresiones-3d',
    icon: 'cube',
    tag: 'Productos',
    title: 'Impresiones 3D',
    text: 'Piezas y repuestos a medida, prototipos, figuras, maceteros y regalos personalizados.',
    img: impresiones,
    long: 'Si lo puedes imaginar, lo podemos imprimir. Fabricamos piezas que ya no se consiguen, prototipos para tu emprendimiento y objetos personalizados.',
    includes: ['Repuestos y piezas a medida', 'Prototipos', 'Figuras y personajes', 'Maceteros y decoración', 'Regalos personalizados'],
  },
  {
    slug: 'venta-de-equipos',
    icon: 'cart',
    tag: 'Productos',
    title: 'Venta de Equipos',
    text: 'PCs gamer y de oficina armadas a tu medida, monitores, periféricos y accesorios.',
    img: equipos,
    long: 'Armamos la PC que necesitas según tu presupuesto, ya sea para jugar, diseñar o trabajar, y te asesoramos para que compres solo lo que realmente vas a usar.',
    includes: ['PCs gamer', 'PCs de oficina', 'Monitores', 'Teclados, mouse y periféricos', 'Accesorios y componentes'],
  },
  {
    slug: 'redes',
    icon: 'network',
    tag: 'Redes',
    title: 'Redes y Cableado',
    text: 'Cableado estructurado, WiFi y redes para hogares y empresas.',
    img: redes,
    long: 'Internet estable en toda tu casa u oficina. Diseñamos e instalamos tu red para que no tengas zonas sin señal ni cortes.',
    includes: ['Cableado estructurado', 'Configuración de routers y WiFi', 'Ampliación de cobertura', 'Redes para empresas', 'Soporte y mantenimiento'],
  },
  {
    slug: 'camaras',
    icon: 'camera',
    tag: 'Redes',
    title: 'Cámaras de Seguridad',
    text: 'Instalación de videovigilancia (DVR/NVR) con monitoreo desde tu celular.',
    img: camara,
    long: 'Protege tu casa o negocio con cámaras que puedes ver desde tu celular en cualquier momento y lugar.',
    includes: ['Instalación de cámaras', 'Configuración de DVR / NVR', 'Monitoreo desde el celular', 'Hogares y negocios', 'Mantenimiento de sistemas'],
  },
]
