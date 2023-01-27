export const IMAGES = {
  images: {
    type: 'object',
    title: 'Imagenes',
    properties: {
      position: {
        type: 'object',
        title: 'Posicion de Imagen',
        properties: {
          gridRowStart: {
            title: "Fila de inicio",
            type: "number"
          },
          gridRowEnd: {
            title: "Fila de fin",
            type: "number"
          },
          gridColStart: {
            title: "Columna de inicio",
            type: "number"
          },
          gridColEnd: {
            title: "Columna de fin",
            type: "number"
          },
        }
      },
      imageUrl: {
        title: 'Url de imagen',
        type: 'string'
      },
      altText: {
        title: 'Texto Alternativo',
        type: 'string'
      },
      desktopImage: {
        title: 'Imagen para escritorio',
        type: 'string',
        widget: {
          'ui:widget': 'image-uploader'
        }
      },
      mobileImage: {
        title: 'Imagen para movil',
        type: 'string',
        widget: {
          'ui:widget': 'image-uploader'
        }
      }
    }
  }
};
