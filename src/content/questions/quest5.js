// preguntas del 401 - 500
export const quest5 = new Map([
  [
    'wr9DT01PIFNFIFJFUFJFU0VOVEEgVU5BIEVOVElEQUQgRU4gRUwgTU9ERUxPIEVOVElEQUQtUkVMQUNJw5NOPw',
    {
    "question": "¿COMO SE REPRESENTA UNA ENTIDAD EN EL MODELO ENTIDAD-RELACIÓN?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Un rectángulo"
        },
        {
            "label": "b",
            "text": "Un óvalo pintado"
        },
        {
            "label": "c",
            "text": "Un óvalo"
        },
        {
            "label": "d",
            "text": "Un rombo"
        }
    ],
    "correctAnswer": "Un rectángulo"
}
  ],
  [
    'wr9DdcOhbGVzIHNvbiBsYXMgZnVuY2lvbmVzIGRlIGFncnVwYW1pZW50bz8',
    {
    "question": "¿Cuáles son las funciones de agrupamiento?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "SUM, MAX, MIN, IN, COUNT"
        },
        {
            "label": "b",
            "text": "SUM, MAX, MIN, AVG, COUNT"
        },
        {
            "label": "c",
            "text": "SUM, MAX, MIN, NOW, COUNT"
        },
        {
            "label": "d",
            "text": "'SUM, MAX, MIN, COALESCE, COUNT'"
        }
    ],
    "correctAnswer": "SUM, MAX, MIN, AVG, COUNT"
}
  ],
  [
    'wr9RdcOpIGZ1bmNpw7NuIGN1bXBsZW4gbG9zIHBhcsOhbWV0cm9zIGRlIHNhbGlkYSBlbiB1biBwcm9jZWRpbWllbnRvCiAgICAgICAgICAgIGFsbWFjZW5hZG8_',
    {
    "question": "¿Qué función cumplen los parámetros de salida en un procedimiento\n            almacenado?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Almacenar datos de manera temporal.'"
        },
        {
            "label": "b",
            "text": "'Retornar valores al programa llamador después de la\n                  ejecución.'"
        },
        {
            "label": "c",
            "text": "'Controlar el flujo del procedimiento almacenado.'"
        },
        {
            "label": "d",
            "text": "'Proporcionar valores de entrada al procedimiento.'"
        }
    ],
    "correctAnswer": "Retornar valores al programa llamador\n            después de la ejecución."
}
  ],
  [
    'wr9QYXJhIHF1ZSBzZSB1dGlsaXphIGVuIHVuYSBzdWJjb25zdWx0YSBkZWwgTVlTUUwgZWwgb3BlcmFkb3IKICAgICAgICAgICJFWElTVFMiPw',
    {
    "question": "¿Para que se utiliza en una subconsulta del MYSQL el operador\n          \"EXISTS\"?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'MySQL analiza si hay datos que coinciden con la subconsulta,\n                  no se devuelve ningún registro, es como un test de existencia'"
        },
        {
            "label": "b",
            "text": "'MySQL analiza si hay datos que coinciden con la subconsulta,\n                  devuelve valores temporales relacionadas a los registros'"
        },
        {
            "label": "c",
            "text": "'MySQL analiza si hay datos que coinciden con la subconsulta,\n                  devuelve muchos registros'"
        },
        {
            "label": "d",
            "text": "'Exist no se puede usar en subconsultas en MySQL'"
        }
    ],
    "correctAnswer": "MySQL analiza si hay datos que coinciden\n            con la subconsulta, no se devuelve ningún registro, es como un test\n            de existencia"
}
  ],
  [
    'wr9DdWFsIGRlIGxvcyBzaWd1aWVudGVzIGNvbWFuZG9zIG5vIGhhY2UgcXVlIHNlIGRpc3BhcmUgdW4gdHJpZ2dlcj8',
    {
    "question": "¿Cual de los siguientes comandos no hace que se dispare un trigger?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "insert"
        },
        {
            "label": "b",
            "text": "delete"
        },
        {
            "label": "c",
            "text": "select"
        },
        {
            "label": "d",
            "text": "update"
        }
    ],
    "correctAnswer": "select"
}
  ],
  [
    'UGFyYSBsYSBvcGVyYWNpw7NuIGRlIGNvbnN1bHRhIGRlIGxhIGltYWdlbiwgwr9DdcOhbCBzZXLDrWEgbGEgb3BlcmFjacOzbgogICAgICAgICAgICBlcXVpdmFsZW50ZT8',
    {
    "question": "Para la operación de consulta de la imagen, ¿Cuál sería la operación\n            equivalente?",
    "image": {
        "src": "https://eval.istg.edu.ec/pluginfile.php/23104/question/questiontext/20548/38/52510/img1.jpg"
    },
    "options": [
        {
            "label": "a",
            "text": "SELECT A.a1,A.a2 FROM B WHERE B.b1 IN ('a','b','c')"
        },
        {
            "label": "b",
            "text": "SELECT A.a1,A.a2 FROM A WHERE A.ida IN (SELECT B.ida FROM B\n                  WHERE B.b1 IN ('a','b','c'))"
        },
        {
            "label": "c",
            "text": "SELECT A.a1,A.a2 FROM A WHERE A.ida = (SELECT B.ida FROM B\n                  WHERE B.b1 IN ('a','b','c'))"
        },
        {
            "label": "d",
            "text": "SELECT A.a1,A.a2 FROM A,B WHERE B.b1 IN ('a','b','c')"
        }
    ],
    "correctAnswer": "SELECT A.a1,A.a2 FROM A WHERE A.ida IN\n            (SELECT B.ida FROM B WHERE B.b1 IN ('a','b','c'))"
}
  ],
  [
    'SWRlbnRpZmlxdWUgbGEgY2FyYWN0ZXLDrXN0aWNhIHF1ZSBsZSBkYSBhbCBzb2Z0d2FyZSBsYSBjYXBhY2lkYWQgZGUKICAgICAgICAgIHBlcm1pdGlyIGFsIHVzdWFyaW8gZW50ZW5kZXIgc2kgZXMgYWRlY3VhZG8sIHkgZGUgdW5hIG1hbmVyYSBmw6FjaWwKICAgICAgICAgIGNvbW8gc2VyIHV0aWxpemFkbyBwYXJhIGxhcyB0YXJlYXMgeSBsYXMgY29uZGljaW9uZXMgcGFydGljdWxhcmVzIGRlCiAgICAgICAgICBsYSBhcGxpY2FjacOzbi4',
    {
    "question": "Identifique la característica que le da al software la capacidad de\n          permitir al usuario entender si es adecuado, y de una manera fácil\n          como ser utilizado para las tareas y las condiciones particulares de\n          la aplicación.",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Entendimiento"
        },
        {
            "label": "b",
            "text": "Aprendizaje"
        },
        {
            "label": "c",
            "text": "Atracción"
        },
        {
            "label": "d",
            "text": "Seguridad"
        }
    ],
    "correctAnswer": "Entendimiento"
}
  ],
  [
    'wr9BIHF1ZSBzZSByZWZpZXJlbiBsb3MgY29zdG9zIGVuY29udHJhZG9zIGVuIGVsIHNvZnR3YXJlIGFudGVzIGRlIGxhCiAgICAgICAgICBlbnRyZWdhIGRlbCBQcm9kdWN0bz8',
    {
    "question": "¿A que se refieren los costos encontrados en el software antes de la\n          entrega del Producto?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Costos por fallas Externas"
        },
        {
            "label": "b",
            "text": "Costo por fallas internas"
        },
        {
            "label": "c",
            "text": "Costos de prevención"
        },
        {
            "label": "d",
            "text": "Costos de evaluación"
        }
    ],
    "correctAnswer": "Costo por fallas internas"
}
  ],
  [
    'SWRlbnRpZmlxdWUgYWwgYXV0b3IgZGVsIGRpYWdyYW1hIGRlIGNhdXNhLWVmZWN0bywgY29ub2NpZG8gdGFtYmnDqW4KICAgICAgICAgIGNvbW8gZGlhZ3JhbWFz4oCcZXNwaW5hcyBkZSBwZXNjYWRv4oCdLg',
    {
    "question": "Identifique al autor del diagrama de causa-efecto, conocido también\n          como diagramas“espinas de pescado”.",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Genichi Taguchi"
        },
        {
            "label": "b",
            "text": "Moses Juran"
        },
        {
            "label": "c",
            "text": "Shigeo Shingo"
        },
        {
            "label": "d",
            "text": "Kaouru Ishikawa"
        }
    ],
    "correctAnswer": "Kaouru Ishikawa"
}
  ],
  [
    'wr9DdcOhbGVzIHNvbiBsYXMgZXRhcGFzIGRlbCBuaXZlbCA0IGRlbCBDTU0_',
    {
    "question": "¿Cuáles son las etapas del nivel 4 del CMM?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Innovación y despliegue organizacional (IDO), Analisis causal\n                  y resolucion (CAR)'"
        },
        {
            "label": "b",
            "text": "'Desempeño de procesos organizacionales (OPP), Analisis causal\n                  y resolucion (CAR)'"
        },
        {
            "label": "c",
            "text": "'Innovación y despliegue organizacional (IDO), Gestión\n                  Cuantitativas de procesos (QPM)'"
        },
        {
            "label": "d",
            "text": "'Desempeño de procesos organizacionales (OPP), Gestión\n                  Cuantitativas de procesos (QPM)'"
        }
    ],
    "correctAnswer": "Desempeño de procesos organizacionales\n            (OPP), Gestión Cuantitativas de procesos (QPM)"
}
  ],
  [
    'wr9DdcOhbCBkZSBsYXMgU2lndWllbnRlcyBubyBwZXJ0ZW5lY2UgYSBsYXMgcHJ1ZWJhcyBkZSBjYWxpZGFkIGRlCiAgICAgICAgICBTb2Z0d2FyZT8',
    {
    "question": "¿Cuál de las Siguientes no pertenece a las pruebas de calidad de\n          Software?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Componentes"
        },
        {
            "label": "b",
            "text": "Unitaria"
        },
        {
            "label": "c",
            "text": "Integración"
        },
        {
            "label": "d",
            "text": "Estructurada"
        }
    ],
    "correctAnswer": "Estructurada"
}
  ],
  [
    'wr9Dw7NtbyBwdWVkZW4gc2VyIGxvcyBUaXBvcyBkZSBJbnRlcmZheiBzZWfDum4gc3UgZW50b3Jubz8',
    {
    "question": "¿Cómo pueden ser los Tipos de Interfaz según su entorno?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Escritorio, Web, Móvil"
        },
        {
            "label": "b",
            "text": "'Sobrecargar el diseño e ignorar la usabilidad'"
        },
        {
            "label": "c",
            "text": "'Identificar y definir la audiencia de sitio web.'"
        },
        {
            "label": "d",
            "text": "'La unión de varias opciones para el usuario'"
        }
    ],
    "correctAnswer": "Escritorio, Web, Móvil"
}
  ],
  [
    'wr9MYSBJbnRlcmZheiBncsOhZmljYSBkZSB1c3VhcmlvIHRhbWJpZW4gY29ub2NpZGEgQ8OzbW8_',
    {
    "question": "¿La Interfaz gráfica de usuario tambien conocida Cómo?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "MVT"
        },
        {
            "label": "b",
            "text": "MVC"
        },
        {
            "label": "c",
            "text": "No mostrar las opciones de diseño"
        },
        {
            "label": "d",
            "text": "GUI"
        }
    ],
    "correctAnswer": "GUI"
}
  ],
  [
    'wr9DdcOhbCBkZSBsb3Mgc2lndWllbnRlcyBhcGxpY2F0aXZvcyBub3MgcGVybWl0ZSByZWFsaXphciBNT0NLVVBTPw',
    {
    "question": "¿Cuál de los siguientes aplicativos nos permite realizar MOCKUPS?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "APACHE"
        },
        {
            "label": "b",
            "text": "Ubuntu"
        },
        {
            "label": "c",
            "text": "MS Edge"
        },
        {
            "label": "d",
            "text": "Sketch"
        }
    ],
    "correctAnswer": "Sketch"
}
  ],
  [
    'Q3VhbmRvIGxvcyB1c3VhcmlvcyBwYXNhbiBsYSBtYXlvciBwYXJ0ZSBkZSBzdSB0aWVtcG8gZW4gZGV0ZXJtaW5hZG8KICAgICAgICAgIHNpdGlvIHdlYi4gwr9RdcOpIHN1Y2VkZSBjb24gc3VzIGV4cGVjdGF0aXZhcyByZXNwZWN0byBkZSBvdHJvcyBzaXRpb3MKICAgICAgICAgIHdlYj8',
    {
    "question": "Cuando los usuarios pasan la mayor parte de su tiempo en determinado\n          sitio web. ¿Qué sucede con sus expectativas respecto de otros sitios\n          web?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'A los usuarios no le interesa las experiencias de un producto\n                  a otro que parezca similar.'"
        },
        {
            "label": "b",
            "text": "'Los usuarios comparan las expectativas que han construido\n                  alrededor de un producto familiar a otro que parezca similar.'"
        },
        {
            "label": "c",
            "text": "'Los usuarios transferirán las expectativas que han construido\n                  alrededor de un producto familiar a otro que parezca similar.'"
        },
        {
            "label": "d",
            "text": "'Los usuarios rara vez transferirán las expectativas que han\n                  construido alrededor de un producto familiar a otro que\n                  parezca similar.'"
        }
    ],
    "correctAnswer": "Los usuarios transferirán las\n            expectativas que han construido alrededor de un producto familiar a\n            otro que parezca similar."
}
  ],
  [
    'U2UgdHJhdGEgZGUgcmVkaW1lbnNpb25hciB5IGNvbG9jYXIgbG9zIGVsZW1lbnRvcyBkZSBsYSB3ZWIgZGUgZm9ybWEKICAgICAgICAgICAgcXVlIHNlIGFkYXB0ZW4gYWwgYW5jaG8gZGUgY2FkYSBkaXNwb3NpdGl2byBwZXJtaXRpZW5kbyB1bmEgY29ycmVjdGEKICAgICAgICAgICAgdmlzdWFsaXphY2nDs24geSB1bmEgbWVqb3IgZXhwZXJpZW5jaWEgZGUgdXN1YXJpbywgbm9zIHJlZmVyaW1vcyBhOg',
    {
    "question": "Se trata de redimensionar y colocar los elementos de la web de forma\n            que se adapten al ancho de cada dispositivo permitiendo una correcta\n            visualización y una mejor experiencia de usuario, nos referimos a:",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Interfaz de línea de comando"
        },
        {
            "label": "b",
            "text": "Diseño Responseve"
        },
        {
            "label": "c",
            "text": "Experiencia de Usuario"
        },
        {
            "label": "d",
            "text": "Principios de Usabilidad"
        }
    ],
    "correctAnswer": "Diseño Responseve"
}
  ],
  [
    'wr9DdcOhbCBlcyBsYSBkaWZlcmVuY2lhIGVudHJlIGxhcyBlc3RydWN0dXJhcyB3aGlsZSB5IGRvIFdoaWxlPw',
    {
    "question": "¿Cuál es la diferencia entre las estructuras while y do While?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'While realiza las instrucciones al principio de la estructura\n                  y coloca la condición al final y el do while coloca la\n                  condición al principio de la estructura y luego realiza las\n                  instrucciones'"
        },
        {
            "label": "b",
            "text": "'While coloca la condición al principio del programa y realiza\n                  las instrucciones; el do while realiza las instrucciones al\n                  principio programa y coloca la condición al final.'"
        },
        {
            "label": "c",
            "text": "'While realiza las instrucciones al principio del programa y\n                  coloca la condición al final y el do while coloca la condición\n                  al principio del programa y luego realiza las instrucciones.'"
        },
        {
            "label": "d",
            "text": "'While coloca la condición al principio de la estructura y\n                  realiza las instrucciones; el do while realiza las\n                  instrucciones al principio de la estructura y coloca la\n                  condición al final.'"
        }
    ],
    "correctAnswer": "While coloca la condición al principio de\n            la estructura y realiza las instrucciones; el do while realiza las\n            instrucciones al principio de la estructura y coloca la condición al\n            final."
}
  ],
  [
    'wr9RdcOpIGVsZW1lbnRvIG5vIG1lIHNpcnZlIHBhcmEgYW5pZGFyIHVuYSBleHByZXNpw7NuIGzDs2dpY2E_',
    {
    "question": "¿Qué elemento no me sirve para anidar una expresión lógica?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Not"
        },
        {
            "label": "b",
            "text": "Mayor que"
        },
        {
            "label": "c",
            "text": "And"
        },
        {
            "label": "d",
            "text": "Or"
        }
    ],
    "correctAnswer": "Mayor que"
}
  ],
  [
    'TGEgc2VudGVuY2lhIGNvbmRpY2lvbmFsIElmIHNpcnZlIHBhcmEgcGVybWl0aXIgbyBubyBsYSBlamVjdWNpw7NuIGRlCiAgICAgICAgICB1biBibG9xdWUgZGUgY8OzZGlnby4gwr9Dw7NtbyBldmFsdWEgZXN0ZSBpZiB1bmEgZXhwcmVzacOzbiBsw7NnaWNhPw',
    {
    "question": "La sentencia condicional If sirve para permitir o no la ejecución de\n          un bloque de código. ¿Cómo evalua este if una expresión lógica?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Si el resultado de esa expresión es False, entonces si se\n                  ejecuta el bloque de código porque no se cumple la condición.'"
        },
        {
            "label": "b",
            "text": "'Si el resultado de esa expresión es False, entonces no se\n                  ejecuta el bloque de código porque no se cumple la condición.'"
        },
        {
            "label": "c",
            "text": "'Si el resultado de esa expresión es True, entonces si se\n                  ejecuta el bloque de código porque no se cumple la condición.'"
        },
        {
            "label": "d",
            "text": "'Si el resultado de esa expresión es True, entonces no se\n                  ejecuta el bloque de código porque no se cumple la condición.'"
        }
    ],
    "correctAnswer": "Si el resultado de esa expresión es\n            False, entonces no se ejecuta el bloque de código porque no se\n            cumple la condición."
}
  ],
  [
    'wr9RdcOpIGluZGljYSBlbCB1c28gZGUgbG9zIHBhcsOpbnRlc2lzIGVuIGxhIGNvbnN0cnVjY2nDs24gZGUgdW5hCiAgICAgICAgICBleHByZXNpw7NuIGFuaWRhZGEgZW4gcHJvZ3JhbWFjacOzbj8',
    {
    "question": "¿Qué indica el uso de los paréntesis en la construcción de una\n          expresión anidada en programación?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Una operación a ejecutarse cuando se pueda.'"
        },
        {
            "label": "b",
            "text": "'Una operación que siempre se ejecuta en orden aleatorio.'"
        },
        {
            "label": "c",
            "text": "'Una operación que tiene que ejecutarse con prioridad.'"
        },
        {
            "label": "d",
            "text": "'Una operación que siempre se ejecuta en orden secuencial.'"
        }
    ],
    "correctAnswer": "Una operación que tiene que ejecutarse\n            con prioridad."
}
  ],
  [
    'wr9DdcOhbCBkZSBsYXMgc2lndWllbnRlcyBlc3RydWN0dXJhcyBzZSBlamVjdXRhIGFsIG1lbm9zIHVuYSB2ZXosIHNpIG5vCiAgICAgICAgICBzZSBjdW1wbGUgbGEgY29uZGljacOzbj8',
    {
    "question": "¿Cuál de las siguientes estructuras se ejecuta al menos una vez, si no\n          se cumple la condición?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "For"
        },
        {
            "label": "b",
            "text": "While"
        },
        {
            "label": "c",
            "text": "Ninguna de las anteriores"
        },
        {
            "label": "d",
            "text": "Do while"
        }
    ],
    "correctAnswer": "Do while"
}
  ],
  [
    'wr9RdcOpIGRldnVlbHZlIGxhIGV4cHJlc2lvbiBOb3QgVHJ1ZT8',
    {
    "question": "¿Qué devuelve la expresion Not True?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "True"
        },
        {
            "label": "b",
            "text": "Not True"
        },
        {
            "label": "c",
            "text": "False"
        },
        {
            "label": "d",
            "text": "Not False"
        }
    ],
    "correctAnswer": "False"
}
  ],
  [
    'wr9RdcOpIHByb3RvY29sbyBzZSB1dGlsaXphIHBhcmEgZW52aWFyIGNvcnJlb3MgZWxlY3Ryw7NuaWNvcz8',
    {
    "question": "¿Qué protocolo se utiliza para enviar correos electrónicos?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "HTTP"
        },
        {
            "label": "b",
            "text": "UDP"
        },
        {
            "label": "c",
            "text": "TCP"
        },
        {
            "label": "d",
            "text": "SMTP"
        }
    ],
    "correctAnswer": "SMTP"
}
  ],
  [
    'wr9DdcOhbGVzIHNvbiBsb3MgdGlwb3MgZGUgcmVkZXMgbcOhcyBjb211bmVzIGRlIGluZnJhZXN0cnVjdHVyYT8',
    {
    "question": "¿Cuáles son los tipos de redes más comunes de infraestructura?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "MAN Y NAM"
        },
        {
            "label": "b",
            "text": "SAN Y XAN"
        },
        {
            "label": "c",
            "text": "LAN y WAN"
        },
        {
            "label": "d",
            "text": "MAN y SAN"
        }
    ],
    "correctAnswer": "LAN y WAN"
}
  ],
  [
    'wr9DdcOhbCBkZSBsYXMgc2lndWllbnRlcyB0b3BvbG9nw61hcyBkZSByZWQgZXMgbcOhcyByZXNpc3RlbnRlIGEgZmFsbG9zPw',
    {
    "question": "¿Cuál de las siguientes topologías de red es más resistente a fallos?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Malla"
        },
        {
            "label": "b",
            "text": "Estrella"
        },
        {
            "label": "c",
            "text": "Bus"
        },
        {
            "label": "d",
            "text": "Anillo"
        }
    ],
    "correctAnswer": "Malla"
}
  ],
  [
    'wr9DdcOhbCBlcyBsYSBjbGFzZSB5IHRpcG8gZGUgZGlyZWNjaW9uIHBhcmEgbGEgSVAgMTcyLjMxLjI1NS4yNTQ_',
    {
    "question": "¿Cuál es la clase y tipo de direccion para la IP 172.31.255.254?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "B Pública"
        },
        {
            "label": "b",
            "text": "A Privada"
        },
        {
            "label": "c",
            "text": "A Publica"
        },
        {
            "label": "d",
            "text": "B Privada"
        }
    ],
    "correctAnswer": "B Privada"
}
  ],
  [
    'wr9RdcOpIHNpZ25pZmljYSB1bmljYXN0Pw',
    {
    "question": "¿Qué significa unicast?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Paquete que se envía de un host a un grupo de host'"
        },
        {
            "label": "b",
            "text": "'Paquete que se envía de un host a otro host individual'"
        },
        {
            "label": "c",
            "text": "Ninguna de las anteriores"
        },
        {
            "label": "d",
            "text": "'Paquete que se envía de un host a todos los hosts de la red'"
        }
    ],
    "correctAnswer": "Paquete que se envía de un host a otro\n            host individual"
}
  ],
  [
    'Q29uY2VybmllbnRlIGEgbG9zIERGRCwgc2VsZWNjaW9uZSBlbCBlbnVuY2lhZG8gY29ycmVjdG86',
    {
    "question": "Concerniente a los DFD, seleccione el enunciado correcto:",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Es una técnica de diseño estructurado que permite construir\n                  una representación gráfica de los procesos de datos a través\n                  de la organización.'"
        },
        {
            "label": "b",
            "text": "Ninguna de las anteriores"
        },
        {
            "label": "c",
            "text": "'Es una técnica de análisis estructurado que permite diseñar o\n                  construir una representación gráfica de los procesos de datos\n                  a través de la organización.'"
        },
        {
            "label": "d",
            "text": "'Es una técnica de análisis estructurado que permite definir\n                  la gestión de la organización y el impacto de automatizar un\n                  proceso clave en la misma.'"
        }
    ],
    "correctAnswer": "Es una técnica de análisis estructurado\n            que permite diseñar o construir una representación gráfica de los\n            procesos de datos a través de la organización."
}
  ],
  [
    'RW4gbG9zIGRpYWdyYW1hcyBkZSBmbHVqbywgc3UgcmVwcmVzZW50YWNpw7NuIGdyw6FmaWNhIGVzIHVuYSBzZXJpZQogICAgICAgICAgZGV0ZXJtaW5hZGEgZGUgZmlndXJhczo',
    {
    "question": "En los diagramas de flujo, su representación gráfica es una serie\n          determinada de figuras:",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Tridimencionales"
        },
        {
            "label": "b",
            "text": "Arquitectónicas"
        },
        {
            "label": "c",
            "text": "Circulares"
        },
        {
            "label": "d",
            "text": "Geométricas"
        }
    ],
    "correctAnswer": "Geométricas"
}
  ],
  [
    'wr9Dw7NtbyBzZSBtaWRlIGVsIGRlc2VtcGXDsW8gZGUgdW5hIHVuaWRhZCBkZSBhbG1hY2VuYW1pZW50byBTU0Q_',
    {
    "question": "¿Cómo se mide el desempeño de una unidad de almacenamiento SSD?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "La capacidad de almacenamiento"
        },
        {
            "label": "b",
            "text": "La marca del fabricante"
        },
        {
            "label": "c",
            "text": "Velocidad de lectura y escritura secuencial"
        },
        {
            "label": "d",
            "text": "El precio"
        }
    ],
    "correctAnswer": "Velocidad de lectura y escritura\n            secuencial"
}
  ],
  [
    'TGEgbWVqb3IgbWFuZXJhIGRlIHRyYW5zbWl0aXIgZWxlY3RyaWNpZGFkIGEgZ3JhbmRlcyBkaXN0YW5jaWFzLCBlcwogICAgICAgICAgICBhIHRyYXbDqXMgZGU6',
    {
    "question": "La mejor manera de transmitir electricidad a grandes distancias, es\n            a través de:",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Corriente monofásica"
        },
        {
            "label": "b",
            "text": "Corriente alterna"
        },
        {
            "label": "c",
            "text": "Corriente trifásica"
        },
        {
            "label": "d",
            "text": "Corriente continua"
        }
    ],
    "correctAnswer": "Corriente alterna"
}
  ],
  [
    'RW4gREZELCBlbCBzw61tYm9sbyBxdWUgdGllbmUgZm9ybWEgcmVjdGFuZ3VsYXIgc2UgZGVub21pbmE6',
    {
    "question": "En DFD, el símbolo que tiene forma rectangular se denomina:",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Proceso de datos"
        },
        {
            "label": "b",
            "text": "Salida de datos"
        },
        {
            "label": "c",
            "text": "Inicio"
        },
        {
            "label": "d",
            "text": "Entrada de datos"
        }
    ],
    "correctAnswer": "Proceso de datos"
}
  ],
  [
    'TG9zIG3Ds2R1bG9zIGZhYnJpY2Fkb3MgcG9yIHRlcmNlcm9zIHF1ZSBzZSBwdWVkZW4gYXBpbGFyIGVuY2ltYSBkZSBsYQogICAgICAgICAgcGxhY2EgQXJkdWlubyB5IGxlIHByb3BvcmNpb25hbiB1bmEgZnVuY2lvbmFsaWRhZCBkZXRlcm1pbmFkYSBzZQogICAgICAgICAgbGxhbWFuLg',
    {
    "question": "Los módulos fabricados por terceros que se pueden apilar encima de la\n          placa Arduino y le proporcionan una funcionalidad determinada se\n          llaman.",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Shields"
        },
        {
            "label": "b",
            "text": "Mega"
        },
        {
            "label": "c",
            "text": "Arduino uno"
        },
        {
            "label": "d",
            "text": "Tarjetas de extensión"
        }
    ],
    "correctAnswer": "Shields"
}
  ],
  [
    'VU1MIGVzIHV0aWxpemFkbyBwYXJhID8',
    {
    "question": "UML es utilizado para ?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Representar y modelar la información que se levanta en la\n                  fase de análisis'"
        },
        {
            "label": "b",
            "text": "'Crear un estándar de programación'"
        },
        {
            "label": "c",
            "text": "Desarrollar un sistema"
        },
        {
            "label": "d",
            "text": "'Graficar información en forma de cajas'"
        }
    ],
    "correctAnswer": "Representar y modelar la información que\n            se levanta en la fase de análisis"
}
  ],
  [
    'UmVwcmVzZW50YSB0w61waWNhbWVudGUgZWwgZW1wYXF1ZXRhbWllbnRvIGbDrXNpY28gZGUgZGlmZXJlbnRlcwogICAgICAgICAgICBlbGVtZW50b3MgbMOzZ2ljb3MsIGNvbW8gY2xhc2VzIGludGVyZmFjZXMgeSBjb2xhYm9yYWNpb25lcy4',
    {
    "question": "Representa típicamente el empaquetamiento físico de diferentes\n            elementos lógicos, como clases interfaces y colaboraciones.",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "componente"
        },
        {
            "label": "b",
            "text": "clase"
        },
        {
            "label": "c",
            "text": "variaciones"
        },
        {
            "label": "d",
            "text": "Interacciones"
        }
    ],
    "correctAnswer": "variaciones"
}
  ],
  [
    'wr9DdcOhbCBkZSBsYXMgc2lndWllbnRlcyBvcGNpb25lcyBkZXNjcmliZSB1bmEgZGVzdmVudGFqYSBkZWwgbW9kZWxvIGVuCiAgICAgICAgICBjYXNjYWRhPw',
    {
    "question": "¿Cuál de las siguientes opciones describe una desventaja del modelo en\n          cascada?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Retroalimentación continua del cliente'"
        },
        {
            "label": "b",
            "text": "'Dificultad para corregir errores en etapas posteriores del\n                  proyecto'"
        },
        {
            "label": "c",
            "text": "'Mayor flexibilidad y adaptabilidad a los cambios'"
        },
        {
            "label": "d",
            "text": "'Entrega temprana de software funcional'"
        }
    ],
    "correctAnswer": "Retroalimentación continua del cliente"
}
  ],
  [
    'wr9DdcOhbCBkZSBsYXMgc2lndWllbnRlcyBvcGNpb25lcyBubyBlcyB1biBwaWxhciBTY3J1bT8',
    {
    "question": "¿Cuál de las siguientes opciones no es un pilar Scrum?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Adaptación"
        },
        {
            "label": "b",
            "text": "Transparencia"
        },
        {
            "label": "c",
            "text": "Inspección"
        },
        {
            "label": "d",
            "text": "Valor"
        }
    ],
    "correctAnswer": "Valor"
}
  ],
  [
    'wr9RdcOpIGVzIGxhIHRyYW5zcGFyZW5jaWEgZW4gU2NydW0_',
    {
    "question": "¿Qué es la transparencia en Scrum?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Compromiso con lo que se está haciendo y con las personas que\n                  componen el equipo.'"
        },
        {
            "label": "b",
            "text": "'Todos deben saber qué está pasando en el proyecto y por qué\n                  para poder tomar las decisiones más correctas.'"
        },
        {
            "label": "c",
            "text": "Los sprints del proyecto."
        },
        {
            "label": "d",
            "text": "'La relación entre el equipo del proyecto.'"
        }
    ],
    "correctAnswer": "Todos deben saber qué está pasando en el\n            proyecto y por qué para poder tomar las decisiones más correctas."
}
  ],
  [
    'RGUgcXVlIHNlIGVuY2FyZ2EgYWwgZXRhcGEgZGUgZGlzZcOxbyBlbiBlbCBjaWNsbyBkZSB2aWRhIGRlbCBzb2Z0d2FyZT8',
    {
    "question": "De que se encarga al etapa de diseño en el ciclo de vida del software?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'recopila,examina y formula los requisitos del cliente'"
        },
        {
            "label": "b",
            "text": "'se encarga de la puesta en producción del sistema'"
        },
        {
            "label": "c",
            "text": "'implementa procedimientos correctivos y mejoras'"
        },
        {
            "label": "d",
            "text": "'diseña los requisitos generales de la arquitectura del\n                  sistema'"
        }
    ],
    "correctAnswer": "diseña los requisitos generales de la\n            arquitectura del sistema"
}
  ],
  [
    'wr9QYXJhIHF1w6kgc2UgdXRpbGl6YSBwcmluY2lwYWxtZW50ZSBKYXZhU2NyaXB0Pw',
    {
    "question": "¿Para qué se utiliza principalmente JavaScript?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Crear sitios interactivos y almacenamiento de datos.'"
        },
        {
            "label": "b",
            "text": "'Crear sitios para almacenamiento de datos.'"
        },
        {
            "label": "c",
            "text": "'Crear sitios interactivos y animados.'"
        },
        {
            "label": "d",
            "text": "'Crear sitios interactivos sin capacidad de respuesta.'"
        }
    ],
    "correctAnswer": "Crear sitios interactivos y animados."
}
  ],
  [
    'wr9DdcOhbCBlcyBsYSBwYXJ0ZSBkZSB1biBkb2N1bWVudG8gSFRNTCBxdWUgaW5jbHV5ZSB0b2RhIGxhIGluZm9ybWFjacOzbgogICAgICAgICAgcXVlIGluZGljYSBhbCBuYXZlZ2Fkb3IsIGxvcyBzZXJ2aWRvcmVzIHdlYiwgZWwgdGlwbyB5IHN1cwogICAgICAgICAgY2FyYWN0ZXLDrXN0aWNhcz8',
    {
    "question": "¿Cuál es la parte de un documento HTML que incluye toda la información\n          que indica al navegador, los servidores web, el tipo y sus\n          características?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "head"
        },
        {
            "label": "b",
            "text": "html"
        },
        {
            "label": "c",
            "text": "title"
        },
        {
            "label": "d",
            "text": "body"
        }
    ],
    "correctAnswer": "head"
}
  ],
  [
    'wr9QYXJhIHF1w6kgc2lydmUgYXRyaWJ1dG8g4oCYY2xhc3PigJkgZGUgSFRNTCBlbiByZWxhY2nDs24gY29uIGxvcyBlc3RpbG9zCiAgICAgICAgICAgIENTUz8',
    {
    "question": "¿Para qué sirve atributo ‘class’ de HTML en relación con los estilos\n            CSS?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Es específico para indicar el color de la fuente que queremos\n                  aplicar, Por ejemplo: p class=\"red\" presentaría las letras en\n                  rojo de ese párrafo."
        },
        {
            "label": "b",
            "text": "Para indicar la clase de estilo que vamos a aplicar al\n                  elemento/etiqueta HTML que lleva ese atributo: en línea, hoja\n                  interna o externa CSS."
        },
        {
            "label": "c",
            "text": "No tiene que ver con los estilo. Realmente se utiliza para\n                  clasificar el tipo de enlace ('a') que estamos definiendo:\n                  vínculo interno o a una página en nuestro mismo dominio o a un\n                  sitio web externo."
        },
        {
            "label": "d",
            "text": "Para aplicar unos estilos específicos (que se definen en una\n                  hoja CSS interna o externa) a los elementos que tenga la misma\n                  clase, es decir, el mismo valor en ese atributo."
        }
    ],
    "correctAnswer": "Para aplicar unos estilos específicos (que\n            se definen en una hoja CSS interna o externa) a los elementos que\n            tenga la misma clase, es decir, el mismo valor en ese atributo."
}
  ],
  [
    'RXNjb2phIGxhIG9wY2nDs24gY29ycmVjdGE6IMK_Q3XDoWwgZXMgZWwgc2VydmljaW8gcXVlIHNlIGRlYmUKICAgICAgICAgICAgY29udHJhdGFyIHBhcmEgdmVyaWZpY2FyIHkgYWRxdWlyaXIgdW5hIFVSTCBvIG5vbWJyZSBkZWwgc2l0aW8gd2ViCiAgICAgICAgICAgIGNvbiBzdSByZXNwZWN0aXZhIGV4dGVuc2nDs24geSBxdWUgZXN0YSBzZWEgw7puaWNhIGVuIGVsIG11bmRvIGRlIGxhCiAgICAgICAgICAgIGludGVybmV0Pw',
    {
    "question": "Escoja la opción correcta: ¿Cuál es el servicio que se debe\n            contratar para verificar y adquirir una URL o nombre del sitio web\n            con su respectiva extensión y que esta sea única en el mundo de la\n            internet?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Adquirir un Subdominio."
        },
        {
            "label": "b",
            "text": "Adquirir un Dominio"
        },
        {
            "label": "c",
            "text": "Adquirir un Hosting"
        },
        {
            "label": "d",
            "text": "Adquirir un Rango/PostGetURL"
        }
    ],
    "correctAnswer": "Adquirir un Dominio"
}
  ],
  [
    'RW4gcHJvZ3JhbWFjacOzbiBvcmllbnRhZGEgYSBvYmpldG9zLCDCv3F1w6kgc2lnbmlmaWNhIGluc3RhbmNpYXIgdW5hCiAgICAgICAgICBjbGFzZT8',
    {
    "question": "En programación orientada a objetos, ¿qué significa instanciar una\n          clase?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Duplicar una clase"
        },
        {
            "label": "b",
            "text": "Conectar dos clases entre sí"
        },
        {
            "label": "c",
            "text": "'Crear un objeto a partir de la clase'"
        },
        {
            "label": "d",
            "text": "Eliminar una clase"
        }
    ],
    "correctAnswer": "Crear un objeto a partir de la clase"
}
  ],
  [
    'wr9Dw7NtbyBzb24gbGFzIGNsYXZlcyBlbiBsb3MgZGljY2lvbmFyaW9zIGVuIGxhIHByb2dyYW1hY2nDs24gb3JpZW50YWRhCiAgICAgICAgICBhIG9iamV0b3M_',
    {
    "question": "¿Cómo son las claves en los diccionarios en la programación orientada\n          a objetos?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Secuenciales"
        },
        {
            "label": "b",
            "text": "Ordenadas"
        },
        {
            "label": "c",
            "text": "Desordenadas"
        },
        {
            "label": "d",
            "text": "Sin un orden particular"
        }
    ],
    "correctAnswer": "Sin un orden particular"
}
  ],
  [
    'wr9DdcOhbCBkZSBsYXMgb3BjaW9uZXMgZXMgbGEgbcOhcyBhZGVjdWFkYSBwYXJhIGFjY2VkZXIgYSBsb3MgZWxlbWVudG9zCiAgICAgICAgICBkZSB1bmEgdHVwbGE_',
    {
    "question": "¿Cuál de las opciones es la más adecuada para acceder a los elementos\n          de una tupla?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Indices"
        },
        {
            "label": "b",
            "text": "Claves"
        },
        {
            "label": "c",
            "text": "Contador"
        },
        {
            "label": "d",
            "text": "Valores"
        }
    ],
    "correctAnswer": "Indices"
}
  ],
  [
    'wr9RdcOpIHNlIGRlYmUgY3JlYXIgYW50ZXMgZGUgZXNjcmliaXIgdW5hIGNvbnN1bHRhIGVuIGxhIGJhc2UgZGUgZGF0b3M_',
    {
    "question": "¿Qué se debe crear antes de escribir una consulta en la base de datos?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "close()"
        },
        {
            "label": "b",
            "text": "execute()"
        },
        {
            "label": "c",
            "text": "commit()"
        },
        {
            "label": "d",
            "text": "cursor()"
        }
    ],
    "correctAnswer": "cursor()"
}
  ],
  [
    'wr9RdcOpIGZ1bmNpw7NuIHRpZW5lbiBsb3MgaW5kaWNlcyBuZWdhdGl2b3MgZW4gbGlzdGFzIGRlbnRybyBkZSBsYQogICAgICAgICAgcHJvZ3JhbWFjacOzbiBvcmllbnRhZGEgYSBvYmpldG9zPw',
    {
    "question": "¿Qué función tienen los indices negativos en listas dentro de la\n          programación orientada a objetos?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Tienen la misma funcion que los postivos'"
        },
        {
            "label": "b",
            "text": "No son permitidos"
        },
        {
            "label": "c",
            "text": "'Devuelven datos del final al principio'"
        },
        {
            "label": "d",
            "text": "No tienen efecto en la lista"
        }
    ],
    "correctAnswer": "Devuelven datos del final al principio"
}
  ],
  [
    'U2VsZWNjaW9uZSBsYSBvcGNpw7NuIGNvbiBsYSByZXNwdWVzdGEgcXVlIGNvbnNpZGVyZSBjb3JyZWN0YS4gwr9RdcOpCiAgICAgICAgICBwZXJtaXRlIHJlYWxpemFyIGVsIG3DqXRvZG8gUE9TVCBlbiB1biBmb3JtdWxhcmlvIHdlYj8',
    {
    "question": "Seleccione la opción con la respuesta que considere correcta. ¿Qué\n          permite realizar el método POST en un formulario web?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Permite realizar una petición al servidor para presentar en\n                  pantalla imágenes y videos de YouTube únicamente'"
        },
        {
            "label": "b",
            "text": "'Permite enviar datos ocultos desde un formulario web para ser\n                  registrados en una base de datos.'"
        },
        {
            "label": "c",
            "text": "'Permite enviar datos desde un formulario web para ser\n                  almacenada en una cookie'"
        },
        {
            "label": "d",
            "text": "'Permite realizar una petición al servidor para mejorar la\n                  conexión con la base de datos'"
        }
    ],
    "correctAnswer": "Permite enviar datos ocultos desde un\n            formulario web para ser registrados en una base de datos."
}
  ],
  [
    'U2VsZWNjaW9uZSBsYSBvcGNpw7NuIGNvbiBsYSByZXNwdWVzdGEgcXVlIGNvbnNpZGVyZSBjb3JyZWN0YSwKICAgICAgICAgICAgwqBFbiB1bmEgYXBsaWNhY2nDs24gY3JlYWRhIHVzYW5kbyDCoGxhcyDCoFZpc3RhcyBCYXNhZGFzCiAgICAgICAgICAgIGVuIENsYXNlIGVuIMKgZWwgZnJhbWV3b3JrIERqYW5nbyAsIMK_UGFyYSByZWFsaXphciB1biBib3JyYWRvCiAgICAgICAgICAgIGbDrXNpY28gZGUgbGEgYmFzZSBkZSBkYXRvLCBzZSBkZWJlIHVzYXIgPw',
    {
    "question": "Seleccione la opción con la respuesta que considere correcta,\n             En una aplicación creada usando  las  Vistas Basadas\n            en Clase en  el framework Django , ¿Para realizar un borrado\n            físico de la base de dato, se debe usar ?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "CreateView"
        },
        {
            "label": "b",
            "text": "ListView"
        },
        {
            "label": "c",
            "text": "DeleteView"
        },
        {
            "label": "d",
            "text": "UpdateView"
        }
    ],
    "correctAnswer": "DeleteView"
}
  ],
  [
    'U2VsZWNjaW9uZSBsYSBvcGNpw7NuIGNvbiBsYSByZXNwdWVzdGEgcXVlIGNvbnNpZGVyZSBjb3JyZWN0YS4gwr8gUXXDqQogICAgICAgICAgY29kaWdvIGRlIGVycm9yIHNlIHByZXNlbnRhIGVuIGVsIG5hdmVnYWRvciwgY3VhbmRvIHVuYSBww6FnaW5hIG8KICAgICAgICAgIHBsYW50aWxsYSBodG1sIG5vIHNlIGVuY3VlbnRyYSBlbiBlbCBzZXJ2aWRvciBkZSBhcGxpY2FjaW9uZXMgZGUKICAgICAgICAgIERqYW5nbyA_',
    {
    "question": "Seleccione la opción con la respuesta que considere correcta. ¿ Qué\n          codigo de error se presenta en el navegador, cuando una página o\n          plantilla html no se encuentra en el servidor de aplicaciones de\n          Django ?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "404"
        },
        {
            "label": "b",
            "text": "200"
        },
        {
            "label": "c",
            "text": "100"
        },
        {
            "label": "d",
            "text": "500"
        }
    ],
    "correctAnswer": "404"
}
  ],
  [
    'wr9RdcOpIHN1Y2VkZSBjdWFuZG8gZWwgYXJjaGl2byB1cmwucHkgc2UgZWRpdGEgbWllbnRyYXMgZWwgc2Vydmlkb3IgZGUKICAgICAgICAgIGRlc2Fycm9sbG8gYcO6biBzZSBlc3TDoSBlamVjdXRhbmRvPw',
    {
    "question": "¿Qué sucede cuando el archivo url.py se edita mientras el servidor de\n          desarrollo aún se está ejecutando?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'El servidor de desarrollo se reinicia automáticamente.'"
        },
        {
            "label": "b",
            "text": "'El servidor de desarrollo termina.'"
        },
        {
            "label": "c",
            "text": "'El servidor de desarrollo no hace nada.'"
        },
        {
            "label": "d",
            "text": "'La página web se vuelve a cargar automáticamente.'"
        }
    ],
    "correctAnswer": "El servidor de desarrollo se reinicia\n            automáticamente."
}
  ],
  [
    'wr9DdcOhbCBvIGN1w6FsZXMgc29uIGxvcyBtw6l0b2RvcyBxdWUgc2UgZWplY3V0YW4gbGEgcHJpbWVyYSB2ZXogY3VhbmRvCiAgICAgICAgICBzZSBpbnN0YW5jaWEgdW5hIGJhc2UgZGUgZGF0b3MgU1FMaXRlPw',
    {
    "question": "¿Cuál o cuáles son los métodos que se ejecutan la primera vez cuando\n          se instancia una base de datos SQLite?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "OnUpgrade"
        },
        {
            "label": "b",
            "text": "'Constructor de la clase y OnCreate'"
        },
        {
            "label": "c",
            "text": "OnCreate y OnUpgrade"
        },
        {
            "label": "d",
            "text": "Ninguna de estas"
        }
    ],
    "correctAnswer": "Constructor de la clase y OnCreate"
}
  ],
  [
    'U2VsZWNjaW9uZSBsYSByZXNwdWVzdGEgY29ycmVjdGE6IMK_IEN1w6FsIGVzIGVsIG5vbWJyZSBkZSBsYSBsaWJyZXLDrWEKICAgICAgICAgICAgcXVlIHNlIHV0aWxpemEgcGFyYSBjb25zdW1pciB1biB3ZWJzZXJ2aWNlcyBvIHVuYSBVUkw_',
    {
    "question": "Seleccione la respuesta correcta: ¿ Cuál es el nombre de la librería\n            que se utiliza para consumir un webservices o una URL?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Gson"
        },
        {
            "label": "b",
            "text": "Retrofit"
        },
        {
            "label": "c",
            "text": "Java"
        },
        {
            "label": "d",
            "text": "Json"
        }
    ],
    "correctAnswer": "Retrofit"
}
  ],
  [
    'wr9FbiBjdcOhbCBkZSBsYXMgc2lndWllbnRlcyBvcGNpb25lcyBzZSBkZWJlIGRlZmluaXIgdW5hIGRpbWVuc2nDs24KICAgICAgICAgIGVzcGVjaWZpY2E_',
    {
    "question": "¿En cuál de las siguientes opciones se debe definir una dimensión\n          especifica?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Fixed"
        },
        {
            "label": "b",
            "text": "Match Parent"
        },
        {
            "label": "c",
            "text": "Wrap Content"
        },
        {
            "label": "d",
            "text": "Match Constraint"
        }
    ],
    "correctAnswer": "Fixed"
}
  ],
  [
    'wr9DdcOhbCBlcyBlbCBwcmltZXIgbcOpdG9kbyBxdWUgc2UgZWplY3V0YSBjdWFuZG8gc2UgY29icmEgdmlkYSB1bgogICAgICAgICAgYWN0aXZpdHkgc2Vnw7puIGVsIGNpY2xvIGRlIHZpZGEgZGVsIGFjdGl2aXR5Pw',
    {
    "question": "¿Cuál es el primer método que se ejecuta cuando se cobra vida un\n          activity según el ciclo de vida del activity?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "onCreate()"
        },
        {
            "label": "b",
            "text": "onResume()"
        },
        {
            "label": "c",
            "text": "onRestart()"
        },
        {
            "label": "d",
            "text": "onStart()"
        }
    ],
    "correctAnswer": "onCreate()"
}
  ],
  [
    'wr9DdcOhbCBlcyBlbCBjb21wb25lbnRlLCBkZSBsYSBBcnF1aXRlY3R1cmEgZGUgY29tcG9uZW50ZXMsIGVuY2FyZ2FkbwogICAgICAgICAgZGUgYWRtaW5pc3RyYXIgbG9zIGRhdG9zIGRlIGZ1ZW50ZXMgU3FsaXRlIHVzYW5kbyBvYmpldG9zPw',
    {
    "question": "¿Cuál es el componente, de la Arquitectura de componentes, encargado\n          de administrar los datos de fuentes Sqlite usando objetos?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "ViewModel"
        },
        {
            "label": "b",
            "text": "RoomDatabase"
        },
        {
            "label": "c",
            "text": "Repositorio"
        },
        {
            "label": "d",
            "text": "'Controlador de Interfaz de Usuario'"
        }
    ],
    "correctAnswer": "RoomDatabase"
}
  ],
  [
    'IlV0aWxpemFuIGVsIHBvdGVuY2lhbCBkZSBsYSB0ZWNub2xvZ8OtYSB5IGxhIGlubm92YWNpw7NuLCBqdW50byBhbAogICAgICAgICAgcmVzdG8gZGUgcmVjdXJzb3MgcGFyYSBoYWNlciBkZSBlbGxvcyB1biB1c28gbcOhcyBlZmljYXosIHByb21vdmVyIHVuCiAgICAgICAgICBkZXNhcnJvbGxvIHNvc3RlbmlibGUgeSwgZW4gZGVmaW5pdGl2YSwgbWVqb3JhciBsYSBjYWxpZGFkIGRlIHZpZGEgZGUKICAgICAgICAgIHN1cyBjaXVkYWRhbm9zLiAi',
    {
    "question": "\"Utilizan el potencial de la tecnología y la innovación, junto al\n          resto de recursos para hacer de ellos un uso más eficaz, promover un\n          desarrollo sostenible y, en definitiva, mejorar la calidad de vida de\n          sus ciudadanos. \"",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "CIUDADES INTELIGENTES"
        },
        {
            "label": "b",
            "text": "NON SQL"
        },
        {
            "label": "c",
            "text": "Metropolis"
        },
        {
            "label": "d",
            "text": "Big DATA"
        }
    ],
    "correctAnswer": "CIUDADES INTELIGENTES"
}
  ],
  [
    'U09OIENBUkFDVEVSSVNUSUNBUyBERSBVTiBEQVRBIFdBUkVIT1VTRQ',
    {
    "question": "SON CARACTERISTICAS DE UN DATA WAREHOUSE",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Histórico/ No en demanda"
        },
        {
            "label": "b",
            "text": "Temático/ No Integrado"
        },
        {
            "label": "c",
            "text": "Integrado/Temático"
        },
        {
            "label": "d",
            "text": "Integral/Domótico"
        }
    ],
    "correctAnswer": "Integrado/Temático"
}
  ],
  [
    'wr9DdcOhbCBlcyBsYSBjb25jYXZpZGFkIGRlIGYoeCkgPSA1eF4yIC0gOHg_',
    {
    "question": "¿Cuál es la concavidad de f(x) = 5x^2 - 8x?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Positiva"
        },
        {
            "label": "b",
            "text": "No existe"
        },
        {
            "label": "c",
            "text": "Negativa"
        },
        {
            "label": "d",
            "text": "Nula"
        }
    ],
    "correctAnswer": "Positiva"
}
  ],
  [
    'T2JzZXJ2YXIgaW1hZ2VuIHkgcmVzcG9uZGEgc2Vnw7puIGNvcnJlc3BvbmRhOg',
    {
    "question": "Observar imagen y responda según corresponda:",
    "image": {
        "src": "https://eval.istg.edu.ec/pluginfile.php/23104/question/questiontext/20798/2/51879/img15.jpg"
    },
    "options": [
        {
            "label": "a",
            "text": "P(1/3;1/7)"
        },
        {
            "label": "b",
            "text": "P(1/8;1/16)"
        },
        {
            "label": "c",
            "text": "P(1/4;1/5)"
        },
        {
            "label": "d",
            "text": "P(1/2;1/8)"
        }
    ],
    "correctAnswer": "P(1/8;1/16)"
}
  ],
  [
    'wr9Dw7NtbyBzZSBkZW5vbWluYSBlbCBwcm9jZXNvIHF1ZSBwZXJtaXRlIHNlcGFyYXIgZWxlbWVudG9zIGRlIHVuCiAgICAgICAgICBjb25qdW50byBlbiBjbGFzZXMgeSBzdWJjbGFzZXMgYWNvcmRlIGEgZG9zIG8gbcOhcyBjcml0ZXJpb3MgZGUKICAgICAgICAgIGNsYXNpZmljYWNpw7NuIHNpbXVsdMOhbmVhbWVudGU_',
    {
    "question": "¿Cómo se denomina el proceso que permite separar elementos de un\n          conjunto en clases y subclases acorde a dos o más criterios de\n          clasificación simultáneamente?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Ordenamiento"
        },
        {
            "label": "b",
            "text": "Secuencia"
        },
        {
            "label": "c",
            "text": "Clasificación"
        },
        {
            "label": "d",
            "text": "Clasificación jerárquica"
        }
    ],
    "correctAnswer": "Clasificación jerárquica"
}
  ],
  [
    'wr9BIHF1w6kgdGlwbyBkZSBwcm9jZXNvcyBjb3JyZXNwb25kZW4gbGEgcGxhbmlmaWNhY2nDs24geSBkZWNpc2nDs24_',
    {
    "question": "¿A qué tipo de procesos corresponden la planificación y decisión?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Procesos de expansión de ideas'"
        },
        {
            "label": "b",
            "text": "Básico del pensamiento"
        },
        {
            "label": "c",
            "text": "Hipótesis"
        },
        {
            "label": "d",
            "text": "'Procesos de contracción de ideas'"
        }
    ],
    "correctAnswer": "Procesos de contracción de ideas"
}
  ],
  [
    'wr9DdcOhbGVzIHNvbiBsb3MgZmFjdG9yZXMgZGV0ZXJtaW5hbnRlcyBkZSBsYSBjdWx0dXJhPw',
    {
    "question": "¿Cuáles son los factores determinantes de la cultura?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Politica, Salud, Bonanza Financiera'"
        },
        {
            "label": "b",
            "text": "'Politica, Salud, Practicas Religiosas'"
        },
        {
            "label": "c",
            "text": "'Posición Geográfica, Practicas Religiosa,Practicas de\n                  Trabajo'"
        },
        {
            "label": "d",
            "text": "'Fuerza Laboral, Salud, Bonanza Financiera'"
        }
    ],
    "correctAnswer": "Posición Geográfica, Practicas\n            Religiosa,Practicas de Trabajo"
}
  ],
  [
    'wr9DdcOhbnRhcyB2ZWNlcyBlbnRyw7MgZW4gdmlnZW5jaWEgZWwgcGxhbiBOYWNpb25hbCBkZSBEZXNhcnJvbGxvIGVudHJlCiAgICAgICAgICBsb3MgYcOxb3MgMjAwNyB5IDIwMTc_',
    {
    "question": "¿Cuántas veces entró en vigencia el plan Nacional de Desarrollo entre\n          los años 2007 y 2017?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "2 veces"
        },
        {
            "label": "b",
            "text": "Ninguna de las Anteriores"
        },
        {
            "label": "c",
            "text": "1 vez"
        },
        {
            "label": "d",
            "text": "3 veces"
        }
    ],
    "correctAnswer": "3 veces"
}
  ],
  [
    'wr9DdcOhbGVzIHNvbiBsYXMgY29tcGV0ZW5jaWFzIGRlIHVuIGVtcHJlbmRlZG9yIGV4aXRvc28_',
    {
    "question": "¿Cuáles son las competencias de un emprendedor exitoso?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Innovación, liderazgo, trabajo individual, pensamiento\n                  crítico.'"
        },
        {
            "label": "b",
            "text": "'Innovación, liderazgo, tolerante, comprometido.'"
        },
        {
            "label": "c",
            "text": "'Innovación, liderazgo, orientación al cliente, trabajo en\n                  equipo'"
        },
        {
            "label": "d",
            "text": "'Innovación, liderazgo, pensamiento crítico, facilidad para\n                  comunicarse.'"
        }
    ],
    "correctAnswer": "Innovación, liderazgo, orientación al\n            cliente, trabajo en equipo"
}
  ],
  [
    'wr9DdcOhbGVzIHNvbiBsYXMgcGFydGVzIEludGVydmluaWVudGVzIGVuIHVuIG1lcmNhZG8_',
    {
    "question": "¿Cuáles son las partes Intervinientes en un mercado?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Compradores y vendedores."
        },
        {
            "label": "b",
            "text": "Comunidad autonoma."
        },
        {
            "label": "c",
            "text": "Gobierno."
        },
        {
            "label": "d",
            "text": "Productos."
        }
    ],
    "correctAnswer": "Compradores y vendedores."
}
  ],
  [
    'RGFkbyBsYXMgc2lndWllbnRlcyBjYXJhY3RlcsOtc3RpY2FzLiBFbGlqYSBsYSBxdWUgTk8gY29ycmVzcG9uZGUgYQogICAgICAgICAgICBsYXMgY2FyYWN0ZXLDrXN0aWNhcyBkZSBsYSBjYW1wYW5hIGRlIEdhdXNzIGRlIHVuYSBkaXN0cmlidWNpw7NuCiAgICAgICAgICAgIG5vcm1hbC4',
    {
    "question": "Dado las siguientes características. Elija la que NO corresponde a\n            las características de la campana de Gauss de una distribución\n            normal.",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Es simétrica respecto al centro'"
        },
        {
            "label": "b",
            "text": "Tiene una asíntota en Y=0"
        },
        {
            "label": "c",
            "text": "El área bajo la curva es 1"
        },
        {
            "label": "d",
            "text": "'Es asimétrica respecto al centro'"
        }
    ],
    "correctAnswer": "Es asimétrica respecto al centro"
}
  ],
  [
    'UGFydGllbmRvIGRlIGxhIGRlZmluaWNpw7NuIGRlIHRlb2xvZ8OtYSwgwr9jdcOhbCBkZSBsYXMgc2lndWllbnRlcwogICAgICAgICAgc2l0dWFjaW9uZXMgbm8gZGVzY3JpYmUgZXNhIGNvcnJpZW50ZSDDqXRpY2E_',
    {
    "question": "Partiendo de la definición de teología, ¿cuál de las siguientes\n          situaciones no describe esa corriente ética?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Un joven fotógrafo apasionado por la aventura a emprendido un\n                  viaje en motocicleta por toda Sudamérica.'"
        },
        {
            "label": "b",
            "text": "'Un artista a hecho obras benéficas para aumentar el volumen\n                  de ventas de su nuevo Cd.'"
        },
        {
            "label": "c",
            "text": "'Un acusado establece un acuerdo con la justicia para que a\n                  través de la confesión de sus crímenes, su pena sea rebajada.'"
        },
        {
            "label": "d",
            "text": "'Un pecador se ha confesado y como parte de su penitencia a\n                  donado varios pollos a los pobres.'"
        }
    ],
    "correctAnswer": "Un joven fotógrafo apasionado por la\n            aventura a emprendido un viaje en motocicleta por toda Sudamérica."
}
  ],
  [
    'wr9DdcOhbGVzIHNvbiBsb3MgcHJpbmNpcGlvcyBmdW5kYW1lbnRhbGVzIGRlIGxhIMOJdGljYSBFbXByZXNhcmlhbD8',
    {
    "question": "¿Cuáles son los principios fundamentales de la Ética Empresarial?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Reglamentos y normativas impuestas por el Instituto donde\n                  estudié.'"
        },
        {
            "label": "b",
            "text": "'Valores y antivalores, moral colectiva.'"
        },
        {
            "label": "c",
            "text": "'Moral social, leyes del estado, conciencia moral.'"
        },
        {
            "label": "d",
            "text": "'Religión, mal sentido de la justicia.'"
        }
    ],
    "correctAnswer": "Moral social, leyes del estado,\n            conciencia moral."
}
  ],
  [
    'RWwgdGlwbyBkZSBlbXByZXNhIGVuIGxhIGN1YWwgc2UgaGFjZSB0cmFuc2Zvcm1hY2nDs24gZGUgbWF0ZXJpYXMKICAgICAgICAgICAgcHJpbWFzIHBhcmEgZGVzYXJyb2xsYXIgdW4gcHJvZHVjdG8gc2UgbGxhbWE6',
    {
    "question": "El tipo de empresa en la cual se hace transformación de materias\n            primas para desarrollar un producto se llama:",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "De servicios"
        },
        {
            "label": "b",
            "text": "Industrial"
        },
        {
            "label": "c",
            "text": "Comercial"
        },
        {
            "label": "d",
            "text": "Mixta"
        }
    ],
    "correctAnswer": "Industrial"
}
  ],
  [
    'wr9DdcOhbGVzIGRlIGxhcyBzaWd1aWVudGVzIGFjdGl2aWRhZGVzIGVjb27Ds21pY2FzIGNvcnJlc3BvbmRlbiBhCiAgICAgICAgICBlbXByZXNhcyBkZWwgc2VjdG9yIHNlY3VuZGFyaW8_Lg',
    {
    "question": "¿Cuáles de las siguientes actividades económicas corresponden a\n          empresas del sector secundario?.",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Agricultura, Ganadería, Pesca, Minería'"
        },
        {
            "label": "b",
            "text": "Ninguna de las anteriores"
        },
        {
            "label": "c",
            "text": "'Industria manufacturera: fabricación de automóviles;\n                  Metalurgia: fabricación de metales.'"
        },
        {
            "label": "d",
            "text": "'Banco, Compañías de seguros, tienda de ropa, tienda de\n                  abarrotes'"
        }
    ],
    "correctAnswer": "Industria manufacturera: fabricación de\n            automóviles; Metalurgia: fabricación de metales."
}
  ],
  [
    'wr9Dw7NtbyBzZSBsbGFtYSBlbCBzb2Z0d2FyZSBxdWUgaGEgc2lkbyBhYmFuZG9uYWRvIHBvciBzdQogICAgICAgICAgICBkZXNhcnJvbGxhZG9yIHkgeWEgbm8gcmVjaWJlIHNvcG9ydGUgbmkgYWN0dWFsaXphY2lvbmVzPw',
    {
    "question": "¿Cómo se llama el software que ha sido abandonado por su\n            desarrollador y ya no recibe soporte ni actualizaciones?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Crippleware"
        },
        {
            "label": "b",
            "text": "Freeware"
        },
        {
            "label": "c",
            "text": "Abandonware"
        },
        {
            "label": "d",
            "text": "Shareware"
        }
    ],
    "correctAnswer": "Abandonware"
}
  ],
  [
    'wr9RdcOpIGVzIHVuYSBsaWNlbmNpYSBkZSBTb2Z0d2FyZSBsaWJyZT8',
    {
    "question": "¿Qué es una licencia de Software libre?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Distribución libre; Inclusión del código fuente; Permitir\n                  modificaciones y trabajos derivados en las mismas condiciones\n                  que el software original.'"
        },
        {
            "label": "b",
            "text": "'Integridad del código fuente del autor, pudiendo requerir que\n                  los trabajos derivados tengan distinto nombre o versión; No\n                  discriminación a personas o grupos; Sin uso restringido a\n                  campo de actividad; Los derechos otorgados a un programa serán\n                  válidos para todo el software redistribuido sin imponer\n                  condiciones complementarias.'"
        },
        {
            "label": "c",
            "text": "'Distribución libre; Permitir modificaciones y trabajos\n                  derivados en las mismas condiciones que el software\n                  original.'"
        },
        {
            "label": "d",
            "text": "'Ejecutar el programa, para cualquier propósito; Estudiar el\n                  funcionamiento del programa, y adaptarlo a sus necesidades;\n                  Redistribuir copias; Mejorar el programa, y poner sus mejoras\n                  a disposición del público, para beneficio de toda la\n                  comunidad.'"
        }
    ],
    "correctAnswer": "Ejecutar el programa, para cualquier\n            propósito; Estudiar el funcionamiento del programa, y adaptarlo a\n            sus necesidades; Redistribuir copias; Mejorar el programa, y poner\n            sus mejoras a disposición del público, para beneficio de toda\n            la comunidad."
}
  ],
  [
    'RW4gbG9zIHNpZ3VpZW50ZXMgZW51bmNpYWRvcywgwr9jdcOhbCBkZWZpbmUgYWwgcmVzdW1lbj8',
    {
    "question": "En los siguientes enunciados, ¿cuál define al resumen?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Es el análisis de la hipótesis'"
        },
        {
            "label": "b",
            "text": "'Es la Introducción y análisis del texto'"
        },
        {
            "label": "c",
            "text": "Es la conclusión del texto"
        },
        {
            "label": "d",
            "text": "'Exposición breve, oral o escrita de las ideas principales'"
        }
    ],
    "correctAnswer": "Exposición breve, oral o escrita de las\n            ideas principales"
}
  ],
  [
    'TG9zIHRpcG9zIGRlIG1lbW9yaWEgc2Vnw7puIGVsIHRpZW1wbyBzZSBjbGFzaWZpY2FuIGVuOg',
    {
    "question": "Los tipos de memoria según el tiempo se clasifican en:",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Inmerso plazo"
        },
        {
            "label": "b",
            "text": "Extenso plazo"
        },
        {
            "label": "c",
            "text": "Mediano plazo"
        },
        {
            "label": "d",
            "text": "Largo plazo"
        }
    ],
    "correctAnswer": "Largo plazo"
}
  ],
  [
    'U2kgcmVhbGl6YW1vcyBsYSBzdW1hIGzDs2dpY2EgZGUgMSsxLCDCv1N1IHJlc3VsdGFkbyBzZXLDrWE_',
    {
    "question": "Si realizamos la suma lógica de 1+1, ¿Su resultado sería?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "4"
        },
        {
            "label": "b",
            "text": "10"
        },
        {
            "label": "c",
            "text": "2"
        },
        {
            "label": "d",
            "text": "1"
        }
    ],
    "correctAnswer": "1"
}
  ],
  [
    'RW4gdW4gQ29uZ3Jlc28gZGUgTWVkaW8gQW1iaWVudGUgcGFydGljaXBhcm9uIDgyIGVzcGVjaWFsaXN0YXMsIGRlIGxvcwogICAgICAgICAgY3VhbGVzOiA2NCBoYW4gdHJhYmFqYWRvIGVuIGVzdHVkaW9zIGRlIGNvbnRhbWluYWNpw7NuIGRlIGFndWFzLCAzMyBlbgogICAgICAgICAgZXN0dWRpb3MgZGUgY29udGFtaW5hY2nDs24gQXRtb3Nmw6lyaWNhLCAyNCBlbiBjb250YW1pbmFjacOzbiBhY8O6c3RpY2EsCiAgICAgICAgICAyNSBoYW4gdHJhYmFqYWRvIGVuIGNvbnRhbWluYWNpw7NuIGRlIGFndWFzIHkgYXRtb3Nmw6lyaWNhcywgMTQgaGFuCiAgICAgICAgICB0cmFiYWphZG8gZW4gcHJveWVjdG9zIGRlIGNvbnRhbWluYWNpw7NuIGF0bW9zZsOpcmljYSB5IGFjw7pzdGljYSwgMjMgZW4KICAgICAgICAgIHRyYWJham9zIGRlIGNvbnRhbWluYWNpw7NuIGRlIGFndWFzIHkgYWPDunN0aWNhLCAxNCBoYW4gdHJhYmFqYWRvIGVuIGxhcwogICAgICAgICAgdHJlcyDDoXJlYXMuIMK_Q3XDoW50b3MgaGFuIHRyYWJhamFkbyBlbiBjb250YW1pbmFjacOzbiBkZSBhZ3VhcyBvCiAgICAgICAgICBjb250YW1pbmFjacOzbiBhY8O6c3RpY2EsIHBlcm8gbm8gZW4gY29udGFtaW5hY2nDs24gYXRtb3Nmw6lyaWNhPw',
    {
    "question": "En un Congreso de Medio Ambiente participaron 82 especialistas, de los\n          cuales: 64 han trabajado en estudios de contaminación de aguas, 33 en\n          estudios de contaminación Atmosférica, 24 en contaminación acústica,\n          25 han trabajado en contaminación de aguas y atmosféricas, 14 han\n          trabajado en proyectos de contaminación atmosférica y acústica, 23 en\n          trabajos de contaminación de aguas y acústica, 14 han trabajado en las\n          tres áreas. ¿Cuántos han trabajado en contaminación de aguas o\n          contaminación acústica, pero no en contaminación atmosférica?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "40"
        },
        {
            "label": "b",
            "text": "34"
        },
        {
            "label": "c",
            "text": "9"
        },
        {
            "label": "d",
            "text": "39"
        }
    ],
    "correctAnswer": "40"
}
  ],
  [
    'RW4gZWwgYW7DoWxpc2lzIHkgZGlzZcOxbyBkZSBzaXN0ZW1hcywgwr9DdcOhbCBlcyBlbCBlc3F1ZW1hIGRlIHByZWd1bnRhcwogICAgICAgICAgZW4gdW5hIGVzdHJ1Y3R1cmEgdGlwbyBwaXLDoW1pZGUgcGFyYSBsYSBlbnRyZXZpc3RhPw',
    {
    "question": "En el análisis y diseño de sistemas, ¿Cuál es el esquema de preguntas\n          en una estructura tipo pirámide para la entrevista?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Preguntas generales a específicas'"
        },
        {
            "label": "b",
            "text": "Preguntas bipolares"
        },
        {
            "label": "c",
            "text": "'Preguntas específicas a generales'"
        },
        {
            "label": "d",
            "text": "'Preguntas específicas a cerradas'"
        }
    ],
    "correctAnswer": "Preguntas específicas a generales"
}
  ],
  [
    'wr9DdcOhbGVzIHNvbiBsb3MgcGFzb3MgcGFyYSBldmFsdWFyIGxvcyByaWVzZ29zIGVuIGFuw6FsaXNpcyB5IGRpc2XDsW8gZGUKICAgICAgICAgIHNpc3RlbWFzPw',
    {
    "question": "¿Cuáles son los pasos para evaluar los riesgos en análisis y diseño de\n          sistemas?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Identificación del riesgo, Análisis del Riesgo, Valoración\n                  del Riesgo'"
        },
        {
            "label": "b",
            "text": "'Descripción del riesgo, Análisis del Riesgo, Estimación del\n                  Riesgo'"
        },
        {
            "label": "c",
            "text": "'Definir el riesgo, Diseño del Riesgo, Valoración del Riesgo'"
        },
        {
            "label": "d",
            "text": "'Identificación del desarrollo, Análisis del Riesgo,\n                  Descripción del Riesgo'"
        }
    ],
    "correctAnswer": "Identificación del riesgo, Análisis del\n            Riesgo, Valoración del Riesgo"
}
  ],
  [
    'wr9RdcOpIHBlcm1pdGVuIHJlcHJlc2VudGFyIGxvcyBkaWFncmFtYXMgZGUgZmx1am8gZGUgZGF0b3M_',
    {
    "question": "¿Qué permiten representar los diagramas de flujo de datos?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Formas visuales para mostrar el movimiento de los datos, por\n                  donde ingresan y salen a través de un sistema de información.'"
        },
        {
            "label": "b",
            "text": "'Permiten definir valores, restricciones con los diagramas\n                  UML.'"
        },
        {
            "label": "c",
            "text": "'Formas lógica que permite ver por donde ingresa y sale la\n                  información a través de un sistema de información.'"
        },
        {
            "label": "d",
            "text": "'Permiten definir estereotipos personalizados, valores\n                  etiquetados y restricciones como un mecanismo de extensión\n                  ligero al estándar UML.'"
        }
    ],
    "correctAnswer": "Formas visuales para mostrar el\n            movimiento de los datos, por donde ingresan y salen a través de un\n            sistema de información."
}
  ],
  [
    'wr9DdcOhbGVzIHNvbiBsb3MgZGF0b3MgcXVlIFPDjSBkZWJlbiBjYXB0dXJhcnNlIGRlbnRybyBkZSB1biBkaXNlw7FvIGRlCiAgICAgICAgICBlbnRyYWRhPw',
    {
    "question": "¿Cuáles son los datos que SÍ deben capturarse dentro de un diseño de\n          entrada?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Datos calculables"
        },
        {
            "label": "b",
            "text": "Datos temporales"
        },
        {
            "label": "c",
            "text": "Datos recuperables"
        },
        {
            "label": "d",
            "text": "Datos de identificación"
        }
    ],
    "correctAnswer": "Datos de identificación"
}
  ],
  [
    'wr9RdcOpIGVzIGVsIGFuw6FsaXNpcyB0ZcOzcmljbz8',
    {
    "question": "¿Qué es el análisis teórico?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Aquel que toma en cuenta mayormente (o únicamente) la\n                  cantidad, la proporción, el volumen, etc.'"
        },
        {
            "label": "b",
            "text": "'Aquel que toma en cuenta la calidad, no la cantidad, es\n                  decir, la naturaleza de las cosas, no su acumulación en\n                  categorías.'"
        },
        {
            "label": "c",
            "text": "'Aquel que se refiere a la revisión de la forma, del conjunto,\n                  más que del contenido y de lo particular.'"
        },
        {
            "label": "d",
            "text": "'Aquel que analiza los conceptos fundamentales o base.'"
        }
    ],
    "correctAnswer": "Aquel que analiza los conceptos\n            fundamentales o base."
}
  ],
  [
    'wr9Dw7NtbyBzZSBjbGFzaWZpY2FuIGxvcyBkaWFncmFtYXMgZGUgRmx1am8gZGUgRGF0b3M_',
    {
    "question": "¿Cómo se clasifican los diagramas de Flujo de Datos?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Abstracto, Estructural"
        },
        {
            "label": "b",
            "text": "'Lógico, Abstracto, Estructural'"
        },
        {
            "label": "c",
            "text": "Lógico, Abstracto, Físico"
        },
        {
            "label": "d",
            "text": "Lógico, Físico"
        }
    ],
    "correctAnswer": "Lógico, Físico"
}
  ],
  [
    'wr9RVUUgRVMgUkVEVU5EQU5DSUEgREUgTEEgSU5GT1JNQUNJw5NOPw',
    {
    "question": "¿QUE ES REDUNDANCIA DE LA INFORMACIÓN?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Información concisa."
        },
        {
            "label": "b",
            "text": "Exceso de datos."
        },
        {
            "label": "c",
            "text": "Duplicidad de información."
        },
        {
            "label": "d",
            "text": "Pérdida de información."
        }
    ],
    "correctAnswer": "Duplicidad de información."
}
  ],
  [
    'wr9RdWUgdGlwbyBkZSBpbmZvcm1hY2nDs24gcGVybWl0ZSBhbG1hY2VuYXIgZWwgdGlwbyBkZSBkYXRvIFRJTllJTlQ_',
    {
    "question": "¿Que tipo de información permite almacenar el tipo de dato TINYINT?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Números enteros entre -128 hasta 127.'"
        },
        {
            "label": "b",
            "text": "Número decimales sin signo."
        },
        {
            "label": "c",
            "text": "Fechas en formato corto."
        },
        {
            "label": "d",
            "text": "Cadena de caracteres."
        }
    ],
    "correctAnswer": "Números enteros entre -128 hasta 127."
}
  ],
  [
    'U2kgc2UgcmVxdWllcmUgY3JlYXIgdW4gY2FtcG8gcGFyYSBhbG1hY2VuYXIgdGV4dG8gZGUgbG9uZ2l0dWQgZmlqYSwKICAgICAgICAgIMK_UXVlIHRpcG8gZGUgZGF0b3Mgc2UgdXRpbGl6YXLDrWE_',
    {
    "question": "Si se requiere crear un campo para almacenar texto de longitud fija,\n          ¿Que tipo de datos se utilizaría?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "blog"
        },
        {
            "label": "b",
            "text": "varchar"
        },
        {
            "label": "c",
            "text": "text"
        },
        {
            "label": "d",
            "text": "char"
        }
    ],
    "correctAnswer": "char"
}
  ],
  [
    'UHJlZ3VudGE6IMK_Q3XDoWwgZXMgbGEgZnVuY2nDs24gcHJpbmNpcGFsIGRlIGxhIGNsw6F1c3VsYSBXSEVSRSBlbiB1bmEKICAgICAgICAgICAgY29uc3VsdGEgU1FMPw',
    {
    "question": "Pregunta: ¿Cuál es la función principal de la cláusula WHERE en una\n            consulta SQL?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Filtrar filas basadas en condiciones específicas.'"
        },
        {
            "label": "b",
            "text": "'Seleccionar las tablas a unir.'"
        },
        {
            "label": "c",
            "text": "'Ordenar los resultados de la consulta.'"
        },
        {
            "label": "d",
            "text": "'Agrupar datos según ciertos criterios.'"
        }
    ],
    "correctAnswer": "Filtrar filas basadas en condiciones\n            específicas."
}
  ],
  [
    'wr9QYXJhIHF1ZSBzZSB1dGlsaXphIExhIGZ1bmNpw7NuIENPVU5UKCopPw',
    {
    "question": "¿Para que se utiliza La función COUNT(*)?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Agrupar elementos dentro de una sentencia SELECT.'"
        },
        {
            "label": "b",
            "text": "'Seleccionar registros de una base de datos.'"
        },
        {
            "label": "c",
            "text": "'Obtener el número de filas de la consulta.'"
        },
        {
            "label": "d",
            "text": "'Contar los registros actualizados por una sentencia UPDATE.'"
        }
    ],
    "correctAnswer": "Obtener el número de filas de la\n            consulta."
}
  ],
  [
    'wr9QYXJhIHF1w6kgc29uIHV0aWxpemFkYXMgbGFzIGJhc2VzIGRlIGRhdG9zPw',
    {
    "question": "¿Para qué son utilizadas las bases de datos?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Para aumentar el tiempo de una consulta'"
        },
        {
            "label": "b",
            "text": "'Para organizar a la población de un lugar al manejar\n                  información propia'"
        },
        {
            "label": "c",
            "text": "'Para controlar el tipo de información que se maneja en\n                  eventos distintos'"
        },
        {
            "label": "d",
            "text": "'Para manipular la información de manera facil, rapida y\n                  automatica'"
        }
    ],
    "correctAnswer": "Para manipular la información de manera\n            facil, rapida y automatica"
}
  ],
  [
    'VW5hIGRlIGxhcyBjdWF0cm8gZXhwcmVzaW9uZXMgc2lndWllbnRlcyBlcyBsYSDDum5pY2EgcXVlIGNvbnRpZW5lIHVuCiAgICAgICAgICAgIGVycm9yIGRlIHNpbnRheGlzLCBzZWxlY2Npb25lIMK_Q3XDoWwgZGUgZWxsYXMgZXMgZXNhIGV4cHJlc2nDs24_',
    {
    "question": "Una de las cuatro expresiones siguientes es la única que contiene un\n            error de sintaxis, seleccione ¿Cuál de ellas es esa expresión?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Mysql -u root -p;"
        },
        {
            "label": "b",
            "text": "Mysql -u root -p123 world > respaldo.sql;"
        },
        {
            "label": "c",
            "text": "Mysql -u root -p123;"
        },
        {
            "label": "d",
            "text": "Mysqldump -u root -p123 world > respaldo.sql;"
        }
    ],
    "correctAnswer": "Mysql -u root -p123 world >\n            respaldo.sql;"
}
  ],
  [
    'wr9DdcOhbCBjw7NkaWdvIFNRTCBkZWJlcsOtYSBkZSB1dGlsaXphciBwYXJhIHZlcmlmaWNhciBxdWUgZWwgZGluZXJvCiAgICAgICAgICAgIHRvdGFsIHJlY2liaWRvIG5vIGV4Y2VkYSBlbCBwcmVzdXB1ZXN0byByZWFsIGFudGVzIGRlIHNlciBtb2RpZmljYWRvCiAgICAgICAgICAgIGVuIGxhIHRhYmxhIEJlY2E_',
    {
    "question": "¿Cuál código SQL debería de utilizar para verificar que el dinero\n            total recibido no exceda el presupuesto real antes de ser modificado\n            en la tabla Beca?",
    "image": {
        "src": "https://eval.istg.edu.ec/pluginfile.php/23104/question/questiontext/20798/34/52519/IMG13.jpg"
    },
    "options": [
        {
            "label": "a",
            "text": "DELIMITER $$ CREATE TRIGGER verificar_valores_desembolsados\n                  AFTER UPDATE ON Beca FOR EACH ROW BEGIN IF\n                  (new.dinero_recibido > old.presupuesto_real) THEN CALL\n                  RAISE_APPLICATION_ERROR (-2058, \"\"El dinero que ha recibido el\n                  becario supera el presupuesto real de la beca\"\"); END IF; END;\n                  $$"
        },
        {
            "label": "b",
            "text": "DELIMITER $$ CREATE TRIGGER verificar_valores_desembolsados\n                  BEFORE UPDATE ON Beca BEGIN IF (new.dinero_recibido >\n                  old.presupuesto_real) THEN CALL RAISE_APPLICATION_ERROR\n                  (-2058, \"\"El dinero que ha recibido el becario supera el\n                  presupuesto real de la beca\"\"); END IF; END; $$"
        },
        {
            "label": "c",
            "text": "DELIMITER $$ CREATE TRIGGER verificar_valores_desembolsados\n                  BEFORE UPDATE ON Beca FOR EACH ROW BEGIN IF\n                  (new.dinero_recibido < old.presupuesto_real) THEN CALL\n                  RAISE_APPLICATION_ERROR (-2058, \"\"El dinero que ha recibido el\n                  becario supera el presupuesto real de la beca\"\"); END IF; END;\n                  $$"
        },
        {
            "label": "d",
            "text": "'DELIMITER $$ CREATE TRIGGER verificar_valores_desembolsados\n                  BEFORE UPDATE ON Beca FOR EACH ROW BEGIN IF\n                  (new.dinero_recibido > old.presupuesto_real) THEN CALL\n                  RAISE_APPLICATION_ERROR (-2058, \"\"El dinero que ha recibido el\n                  becario supera el presupuesto real de la beca\"\"); END IF; END;\n                  $$"
        }
    ],
    "correctAnswer": "DELIMITER $$ CREATE TRIGGER\n            verificar_valores_desembolsados BEFORE UPDATE ON Beca FOR EACH ROW\n            BEGIN IF (new.dinero_recibido > old.presupuesto_real) THEN CALL\n            RAISE_APPLICATION_ERROR (-2058, \"\"El dinero que ha recibido el\n            becario supera el presupuesto real de la beca\"\"); END IF; END; $$"
}
  ],
  [
    'wr9DdcOhbCBkZSBsb3Mgc2lndWllbnRlcyBlbnVuY2lhZG9zIFNRTCBzZSB1c2EgcGFyYSBxdWl0YXJsZSB1bgogICAgICAgICAgcHJpdmlsZWdpbyBhbCB1c3VhcmlvIFJpdmFzPw',
    {
    "question": "¿Cuál de los siguientes enunciados SQL se usa para quitarle un\n          privilegio al usuario Rivas?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Remove update on empleados from Rivas'"
        },
        {
            "label": "b",
            "text": "'Grant update on empleados from Rivas'"
        },
        {
            "label": "c",
            "text": "'Revoke update on empleados from Rivas'"
        },
        {
            "label": "d",
            "text": "'Delete select on empleados from Rivas'"
        }
    ],
    "correctAnswer": "Revoke update on empleados from Rivas"
}
  ],
  [
    'U2UgcmVxdWllcmUgb3RvcmdhciBwZXJtaXNvcyBhbCB1c3VhcmlvIGxsYW1hZG8gImNoYW50b24iIHBhcmEgcXVlCiAgICAgICAgICBwdWVkYSByZWFsaXphciBjdWFscXVpZXIgdHJhbnNhY2Npw7NuIMO6bmljYW1lbnRlIGVuIGxhIGJhc2UgZGUgZGF0b3MKICAgICAgICAgIGxsYW1hZGEgIndvcmxkIi4gU2VsZWNjaW9uZSDCv0N1w6FsIGRlIGxhcyBzaWd1aWVudGVzIHNlbnRlbmNpYXMKICAgICAgICAgIHJlYWxpemFyw61hIGV4YWN0YW1lbnRlIGxvIHF1ZSBzZSBkZXNlYSBoYWNlcj8',
    {
    "question": "Se requiere otorgar permisos al usuario llamado \"chanton\" para que\n          pueda realizar cualquier transacción únicamente en la base de datos\n          llamada \"world\". Seleccione ¿Cuál de las siguientes sentencias\n          realizaría exactamente lo que se desea hacer?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Grant all privileges on *.* to \"chanton\"@\"localhost\";'"
        },
        {
            "label": "b",
            "text": "'Grant all privileges on world.* to \"chanton\"@\"localhost\";'"
        },
        {
            "label": "c",
            "text": "'Grant select, insert, update, drop on world.* to\n                  \"chanton\"@\"localhost\";'"
        },
        {
            "label": "d",
            "text": "'Grant all privileges on world.city to \"chanton\"@\"localhost\";'"
        }
    ],
    "correctAnswer": "Grant all privileges on world.* to\n            \"chanton\"@\"localhost\";"
}
  ],
  [
    'wr9DdcOhbCBlcyBlbCBwcm9ww7NzaXRvIHByaW5jaXBhbCBkZSBsb3MgdHJpZ2dlcnMgZW4gYmFzZXMgZGUgZGF0b3M_',
    {
    "question": "¿Cuál es el propósito principal de los triggers en bases de datos?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Modificar la estructura de la base de datos.'"
        },
        {
            "label": "b",
            "text": "'Manipular y almacenar datos temporales.'"
        },
        {
            "label": "c",
            "text": "'Realizar operaciones específicas automáticamente en respuesta\n                  a eventos de la base de datos.'"
        },
        {
            "label": "d",
            "text": "'Controlar el flujo de ejecución de un programa.'"
        }
    ],
    "correctAnswer": "Realizar operaciones específicas\n            automáticamente en respuesta a eventos de la base de datos."
}
  ],
  [
    'wr9Dw7NtbyB0YW1iacOpbiBzZSBsYSBjb25vY2UgYSBsYXMgTm9tYXMgSVNPL0lFQyAxMjIwNz8',
    {
    "question": "¿Cómo también se la conoce a las Nomas ISO/IEC 12207?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Norma del ciclo de Vida de un servicio.'"
        },
        {
            "label": "b",
            "text": "'Norma del ciclo de Vida de una empresa.'"
        },
        {
            "label": "c",
            "text": "'Norma del ciclo de Vida de un producto.'"
        },
        {
            "label": "d",
            "text": "'\"Norma del ciclo de Vida del software \"'"
        }
    ],
    "correctAnswer": "\"Norma del ciclo de Vida del software \""
}
  ],
  [
    'wr9BIHF1w6kgcHJvdGFnb25pc3RhIGRlIGxhIGNhbGlkYWQgY29ycmVzcG9uZGUgZWwgU0lTVEVNQSBQT0tBIC0gWU9LRT8',
    {
    "question": "¿A qué protagonista de la calidad corresponde el SISTEMA POKA - YOKE?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Armand V. Feigenbaum"
        },
        {
            "label": "b",
            "text": "Shigeo Shingo"
        },
        {
            "label": "c",
            "text": "Genichi Taguchi"
        },
        {
            "label": "d",
            "text": "Edward Deming"
        }
    ],
    "correctAnswer": "Shigeo Shingo"
}
  ],
  [
    'wr9DdcOhbnRhcyBkaW1lbnNpb25lcyBkZSBsYSBjYWxpZGFkIGNvbXBhcnRlIEdhcnbDrW4_',
    {
    "question": "¿Cuántas dimensiones de la calidad comparte Garvín?",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "6"
        },
        {
            "label": "b",
            "text": "8"
        },
        {
            "label": "c",
            "text": "7"
        },
        {
            "label": "d",
            "text": "9"
        }
    ],
    "correctAnswer": "8"
}
  ],
  [
    'SWRlbnRpZmlxdWUgbGEgY2FyYWN0ZXLDrXN0aWNhIHF1ZSBsZSBkYSBhbCBzb2Z0d2FyZSBsYSBjYXBhY2lkYWQgZGUKICAgICAgICAgIHJlc3RhYmxlY2VyIHN1IGZ1bmNpb25hbWllbnRvIGFkZWN1YWRvIHkgcmVjdXBlcmFyIGxvcyBkYXRvcyBhZmVjdGFkb3MKICAgICAgICAgIGVuIGVsIGNhc28gZGUgdW5hIGZhbGxhLg',
    {
    "question": "Identifique la característica que le da al software la capacidad de\n          restablecer su funcionamiento adecuado y recuperar los datos afectados\n          en el caso de una falla.",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "Conformidad"
        },
        {
            "label": "b",
            "text": "Madurez"
        },
        {
            "label": "c",
            "text": "Recuperabilidad"
        },
        {
            "label": "d",
            "text": "Seguridad"
        }
    ],
    "correctAnswer": "Recuperabilidad"
}
  ],
  [
    'SWRlbnRpZmlxdWUgbGEgZGVmaW5pY2nDs24gZGUgRXN0cmF0ZWdpYSBjb21vIHVubyBkZSBsb3MgcGlsYXJlcwogICAgICAgICAgZnVuZGFtZW50YWxlcyBkZSBsYSBHZXN0acOzbiBkZSBsYSBDYWxpZGFkIFRvdGFsLg',
    {
    "question": "Identifique la definición de Estrategia como uno de los pilares\n          fundamentales de la Gestión de la Calidad Total.",
    "image": null,
    "options": [
        {
            "label": "a",
            "text": "'Posee cualidades más nobles como la creatividad, la\n                  innovación, la cooperación, el liderazgo, la participación.'"
        },
        {
            "label": "b",
            "text": "'Se alinea con los principios y filosofía de la Calidad\n                  Total.'"
        },
        {
            "label": "c",
            "text": "'Los procesos, los productos y los servicios son el resultado\n                  de las estrategias de la empresa.'"
        },
        {
            "label": "d",
            "text": "'Las estrategias al igual que los productos y servicios, están\n                  sometidos a una mejora constante.'"
        }
    ],
    "correctAnswer": "Se alinea con los principios y filosofía\n            de la Calidad Total."
}
  ]
]);
