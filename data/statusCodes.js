const statusCode = [
  {
    statusNumber: '100',
    statusTitle: 'continue',
    statusTitleEs: 'continuar',
    src: './images/code-100.jpeg',
  },
  {
    statusNumber: '101',
    statusTitle: 'switching protocols',
    statusTitleEs: 'cambiando protocolos',
    src: './images/code-101.jpg',
  },
  {
    statusNumber: '102',
    statusTitle: 'processing',
    statusTitleEs: 'procesamiento',
    src: './images/code-102.jpeg',
  },
  {
    statusNumber: '103',
    statusTitle: 'early hits',
    statusTitleEs: 'capturas tempranas',
    src: './images/code-103.jpeg',
  },
  {
    statusNumber: '200',
    statusTitle: 'OK',
    statusTitleEs: 'Todo esta bien',
    src: './images/code-200.jpg',
  },
  {
    statusNumber: '201',
    statusTitle: 'created',
    statusTitleEs: 'creado',
    src: './images/code-201.jpg',
  },
  {
    statusNumber: '202',
    statusTitle: 'accepted',
    statusTitleEs: 'aceptado',
    src: './images/code-202.jpeg',
  },
  {
    statusNumber: '203',
    statusTitle: 'non-authorative information',
    statusTitleEs: 'información no autorizada',
    src: './images/code-203.jpg',
  },
  {
    statusNumber: '204',
    statusTitle: 'no content',
    statusTitleEs: 'sin contenido',
    src: './images/code-204.jpeg',
  },
  {
    statusNumber: '205',
    statusTitle: 'reset content',
    statusTitleEs: 'restablecer contenido',
    src: './images/code-205.jpeg',
  },
  {
    statusNumber: '206',
    statusTitle: 'partial content',
    statusTitleEs: 'contenido parcial',
    src: './images/code-206.jpeg',
  },
  {
    statusNumber: '207',
    statusTitle: 'multi status',
    statusTitleEs: 'multi-estado',
    src: './images/code-207.jpeg',
  },
  {
    statusNumber: '208',
    statusTitle: 'already reported',
    statusTitleEs: 'ya reportado',
    src: './images/code-208.jpeg',
  },
  {
    statusNumber: '226',
    statusTitle: 'IM used',
    statusTitleEs: 'IM usado',
    src: './images/code-226.jpeg',
  },
  {
    statusNumber: '300',
    statusTitle: 'multiple choices',
    statusTitleEs: 'múltiples opciones',
    src: './images/code-300.jpeg',
  },
  {
    statusNumber: '301',
    statusTitle: 'moved permanently',
    statusTitleEs: 'relocalización permanente',
    src: './images/code-301.jpeg',
  },
  {
    statusNumber: '302',
    statusTitle: 'found',
    statusTitleEs: 'encontrado',
    src: './images/code-302.jpg',
  },
  {
    statusNumber: '303',
    statusTitle: 'see other',
    statusTitleEs: 'ver otro',
    src: './images/code-303.jpg',
  },
  {
    statusNumber: '304',
    statusTitle: 'not modified',
    statusTitleEs: 'sin modificar',
    src: './images/code-304.jpeg',
  },
  {
    statusNumber: '307',
    statusTitle: 'temporary redirect',
    statusTitleEs: 'redirección temporal',
    src: './images/code-307.jpeg',
  },
  {
    statusNumber: '308',
    statusTitle: 'permanent redirect',
    statusTitleEs: 'redirección permanente',
    src: './images/code-308.jpg',
  },
  {
    statusNumber: '400',
    statusTitle: 'bad request',
    statusTitleEs: 'mala solicitud',
    src: './images/code-400.jpg',
  },
  {
    statusNumber: '401',
    statusTitle: 'unauthorized',
    statusTitleEs: 'no autorizado',
    src: './images/code-401.jpeg',
  },
  {
    statusNumber: '402',
    statusTitle: 'payment required',
    statusTitleEs: 'pago requerido',
    src: './images/code-402.jpg',
  },
  {
    statusNumber: '403',
    statusTitle: 'forbidden',
    statusTitleEs: 'prohibido',
    src: './images/code-403.jpg',
  },
  {
    statusNumber: '404',
    statusTitle: 'not found',
    statusTitleEs: 'no se encuentra',
    src: './images/code-404.jpg',
  },
  {
    statusNumber: '405',
    statusTitle: 'method not allowed',
    statusTitleEs: 'método no permitido',
    src: './images/code-405.jpg',
  },
  {
    statusNumber: '406',
    statusTitle: 'not acceptable',
    statusTitleEs: 'no aceptable',
    src: './images/code-406.jpeg',
  },
  {
    statusNumber: '407',
    statusTitle: 'proxy authentication required',
    statusTitleEs: 'autenticación de proxy requerida',
    src: './images/code-407.jpg',
  },
  {
    statusNumber: '408',
    statusTitle: 'request timeout',
    statusTitleEs: 'solicitud interrumpida',
    src: './images/code-408.jpeg',
  },
  {
    statusNumber: '409',
    statusTitle: 'conflict',
    statusTitleEs: 'conflicto',
    src: './images/code-409.jpeg',
  },
  {
    statusNumber: '410',
    statusTitle: 'gone',
    statusTitleEs: 'ido',
    src: './images/code-410.jpg',
  },
  {
    statusNumber: '411',
    statusTitle: 'length required',
    statusTitleEs: 'largo requerido',
    src: './images/code-411.jpeg',
  },
  {
    statusNumber: '412',
    statusTitle: 'precondition failed',
    statusTitleEs: 'falla en la precondición',
    src: './images/code-412.jpeg',
  },
  {
    statusNumber: '413',
    statusTitle: 'request entity too large',
    statusTitleEs: 'solicitud de entidad muy grande',
    src: './images/code-413.jpeg',
  },
  {
    statusNumber: '414',
    statusTitle: 'request URI too long',
    statusTitleEs: 'solicitud URI muy larga',
    src: './images/code-414.jpeg',
  },
  {
    statusNumber: '416',
    statusTitle: 'requested range not satisfiable',
    statusTitleEs: 'rango no satisfactorio',
    src: './images/code-416.jpeg',
  },
  {
    statusNumber: '417',
    statusTitle: 'expectation failed',
    statusTitleEs: 'expectativa fracasó',
    src: './images/code-417.jpg',
  },
  {
    statusNumber: '418',
    statusTitle: "i'm a cup of coffee",
    statusTitleEs: 'soy una taza de café',
    src: './images/code-418.jpeg',
  },
  {
    statusNumber: '420',
    statusTitle: 'enhance your calm',
    statusTitleEs: 'prende y pasa',
    src: './images/code-420.jpg',
  },
  {
    statusNumber: '422',
    statusTitle: 'unprocessable entity',
    statusTitleEs: 'entidad no procesable',
    src: './images/code-422.jpeg',
  },
  {
    statusNumber: '423',
    statusTitle: 'locked',
    statusTitleEs: 'cerrado',
    src: './images/code-423.jpeg',
  },
  {
    statusNumber: '424',
    statusTitle: 'failed dependency',
    statusTitleEs: 'falla en dependencia',
    src: './images/code-424.jpg',
  },
  {
    statusNumber: '425',
    statusTitle: 'too early',
    statusTitleEs: 'demasiado pronto',
    src: './images/code-425.jpg',
  },
  {
    statusNumber: '426',
    statusTitle: 'upgrade required',
    statusTitleEs: 'actualización requerida',
    src: './images/code-426.jpeg',
  },
  {
    statusNumber: '429',
    statusTitle: 'too many requests',
    statusTitleEs: 'demasiadas solicitudes',
    src: './images/code-429.jpg',
  },
  {
    statusNumber: '431',
    statusTitle: 'request header fields too large',
    statusTitleEs: 'campo de encabezado de solicitud muy grande',
    src: './images/code-431.jpeg',
  },
  {
    statusNumber: '444',
    statusTitle: 'no response',
    statusTitleEs: 'sin responder',
    src: './images/code-444.jpeg',
  },
  {
    statusNumber: '450',
    statusTitle: 'blocked by windows parental control',
    statusTitleEs: 'bloqueado por controles parentales de windows',
    src: './images/code-450.jpg',
  },
  {
    statusNumber: '451',
    statusTitle: 'unavailable for legal reasons',
    statusTitleEs: 'no esta disponible por razones legales',
    src: './images/code-451.jpeg',
  },
  {
    statusNumber: '494',
    statusTitle: 'request header too large',
    statusTitleEs: 'encabezado de solicitud muy grande',
    src: './images/code-494.jpeg',
  },
  {
    statusNumber: '500',
    statusTitle: 'internal server error',
    statusTitleEs: 'error interno en el servidor',
    src: './images/code-500.jpeg',
  },
  {
    statusNumber: '501',
    statusTitle: 'not implemented',
    statusTitleEs: 'no implementado',
    src: './images/code-501.jpeg',
  },
  {
    statusNumber: '502',
    statusTitle: 'bad gateway',
    statusTitleEs: 'mala entrada',
    src: './images/code-502.jpg',
  },
  {
    statusNumber: '503',
    statusTitle: 'service unavailable',
    statusTitleEs: 'servicio no disponible',
    src: './images/code-503.jpg',
  },
  {
    statusNumber: '504',
    statusTitle: 'gateway timeout',
    statusTitleEs: 'tiempo de espera para puerta de enlace',
    src: './images/code-504.jpeg',
  },
  {
    statusNumber: '505',
    statusTitle: 'http version not supported',
    statusTitleEs: 'versión http no compatible',
    src: './images/code-505.jpeg',
  },
  {
    statusNumber: '506',
    statusTitle: 'variant also negotiates',
    statusTitleEs: 'variante también negocia',
    src: './images/code-506.jpeg',
  },
  {
    statusNumber: '507',
    statusTitle: 'insufficient storage',
    statusTitleEs: 'almacenamiento insuficiente',
    src: './images/code-507.jpeg',
  },
  {
    statusNumber: '508',
    statusTitle: 'loop detected',
    statusTitleEs: 'loop detectado',
    src: './images/code-508.jpg',
  },
  {
    statusNumber: '510',
    statusTitle: 'not extended',
    statusTitleEs: 'no extendido',
    src: './images/code-510.jpeg',
  },
  {
    statusNumber: '511',
    statusTitle: 'network authentication required',
    statusTitleEs: 'autenticación de red requerida',
    src: './images/code-511.jpeg',
  },
];