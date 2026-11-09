/**
 * @file ExportarAGoogleSlides.gs
 * @brief Generador Automático de Presentación en Google Presentaciones (Google Slides API).
 * @author Gabriel Nicolás González Ferreira
 * 
 * INSTRUCCIONES DE USO:
 * 1. Ve a tu Google Drive (drive.google.com).
 * 2. Haz clic en "+ Nuevo" > "Más" > "Google Apps Script".
 * 3. Borra todo el código que aparezca y pega este código completo.
 * 4. Haz clic en el botón "Ejecutar" (icono de Triángulo de Play).
 * 5. Revisa la consola o tu Google Drive: ¡Se habrá creado un archivo llamado
 *    "Defensa Tesina UTN - Gabriel González Ferreira" con las 23 diapositivas ya maquetadas!
 */

function crearPresentacionDefensa() {
  // 1. Crear nueva presentación de Google Slides
  var presentation = SlidesApp.create("Defensa Tesina UTN - Gabriel González Ferreira");
  var slides = presentation.getSlides();
  
  // Usar la primera diapositiva por defecto para la Portada
  var slidePortada = slides[0];
  slidePortada.getBackground().setSolidFill("#0f172a"); // Fondo Oscuro Slate
  
  // Título Principal
  var titleBox = slidePortada.insertShape(SlidesApp.ShapeType.RECTANGLE, 50, 40, 620, 150);
  titleBox.getFill().setTransparent();
  titleBox.getBorder().setTransparent();
  var titleTF = titleBox.getText();
  titleTF.setText("Sostenibilidad y Software Libre en el Aula");
  titleTF.getTextStyle().setFontSize(26).setBold(true).setForegroundColor("#ef4444");
  
  // Subtítulo
  var subBox = slidePortada.insertShape(SlidesApp.ShapeType.RECTANGLE, 50, 150, 620, 150);
  subBox.getFill().setTransparent();
  subBox.getBorder().setTransparent();
  var subTF = subBox.getText();
  subTF.setText("Una propuesta tecno-pedagógica para la optimización del aprendizaje y la autonomía en la Tecnicatura Superior en Análisis de Sistemas del ISFT N° 151.\n\nLicenciatura en Tecnología Educativa - UTN FRBA");
  subTF.getTextStyle().setFontSize(14).setForegroundColor("#f8fafc");

  // Autor y Director
  var metaBox = slidePortada.insertShape(SlidesApp.ShapeType.RECTANGLE, 50, 310, 620, 80);
  metaBox.getFill().setTransparent();
  metaBox.getBorder().setTransparent();
  var metaTF = metaBox.getText();
  metaTF.setText("Autor: Gabriel Nicolás González Ferreira (Legajo: 2015780)\nDirector: Dr. Gustavo Eduardo Carr (UNMDP)");
  metaTF.getTextStyle().setFontSize(12).setForegroundColor("#94a3b8");

  // Definición del contenido estructurado de las diapositivas 2 a 23
  var deckData = [
    {
      title: "2. Documentación Reglamentaria",
      items: [
        "• Carta de Aceptación Oficial de Tesina (Aprobada por la Coordinación).",
        "• Documento Nacional de Identidad (DNI: 29.495.326).",
        "• Modalidad de Defensa: Virtual mediante plataforma institucional Zoom."
      ]
    },
    {
      title: "3. Estructura de la Presentación",
      items: [
        "1. Planteo y Roles: El problema, objetivos y el rol del Tecnólogo Educativo.",
        "2. Marco Teórico: Fricción tecno-pedagógica, inclusión y equidad digital.",
        "3. Metodología: Investigación-Acción (I-A) y diseño de ciclo mixto.",
        "4. Resultados y Conclusiones: Fluidez didáctica, autonomía y líneas futuras."
      ]
    },
    {
      title: "4. Planteo del Problema",
      items: [
        "• Fricción Didáctica: Tiempos muertos generados por entornos privativos pesados.",
        "• Obsolescencia: Imposibilidad de correr software moderno en hardware institucional antiguo.",
        "• Brecha de Equidad: Desigualdad entre alumnos con laptops modernas y quienes dependen del equipo del instituto."
      ]
    },
    {
      title: "5. Objetivo General",
      items: [
        "\"Diseñar, implementar y evaluar una propuesta tecno-pedagógica basada en entornos de Software Libre para optimizar las dinámicas de enseñanza-aprendizaje, la fluidez didáctica y la autonomía estudiantil en el ISFT N° 151.\""
      ]
    },
    {
      title: "6. Objetivos Específicos",
      items: [
        "1. Diagnosticar las barreras tecno-pedagógicas y la fricción técnica de los entornos privativos.",
        "2. Implementar un entorno de desarrollo sostenible (Software Libre) integrado a una secuencia didáctica.",
        "3. Evaluar el impacto en el tiempo didáctico, reducción de frustración y apropiación autónoma."
      ]
    },
    {
      title: "7. El Rol del Tecnólogo Educativo",
      items: [
        "• Asesor: Acompañamiento didáctico al docente en el aula.",
        "• Diseñador: Selección y maquetado de soluciones sostenibles.",
        "• Capacitador: Formación en el marco filosófico y ético del Software Libre.",
        "• Coordinador: Facilitador de la transición de usuarios pasivos a agentes autónomos."
      ]
    },
    {
      title: "8. Antecedentes",
      items: [
        "• Dolcemáscolo & Rusconi (2013): Huayra GNU/Linux y soberanía tecnológica.",
        "• Olivencia & Martínez (2015): Pedagogía abierta mediante recursos de bajo coste.",
        "• Guerschberg (2024): Software Libre para reducir la brecha digital en comunidades vulnerables."
      ]
    },
    {
      title: "9. Marco Teórico I | Fricción y Didáctica",
      items: [
        "• Carga Cognitiva Irrelevante (Sweller et al., 2011): La pesadez del sistema agota la memoria de trabajo.",
        "• Edith Litwin (2005): Las tecnologías no son neutras; marcan límites, tiempos y condicionan las experiencias educativas."
      ]
    },
    {
      title: "10. Marco Teórico II | Soberanía y Software Austero",
      items: [
        "• Software Libre (Stallman, 2004): Transparencia cognitiva ('Caja Transparente') e imperativo ético.",
        "• Software Austero (Mfon-Abasi, 2014): Geany e ICEWM para erradicar la frustración y reactivar hardware antiguo."
      ]
    },
    {
      title: "11. Metodología I | Muestra y Unidades",
      items: [
        "• Enfoque Mixto (Cuali-Cuantitativo) en el ISFT N° 151.",
        "• Grupo Intervención (GI - n=10): Hardware antiguo (2012) + Debian + ICEWM + Geany.",
        "• Grupo Referencia (GR - n=10): Hardware institucional reciente + Windows + VS Code.",
        "• Foco TE: Reorganización hacia el impacto en fluidez y equidad."
      ]
    },
    {
      title: "12. Metodología II | Ciclos de I-A",
      items: [
        "1. Diagnóstico: Evaluación de la fricción inicial.",
        "2. Planificación: Diseño del entorno técnico con RAM < 30%.",
        "3. Acción: Inserción del entorno libre y mediación pedagógica.",
        "4. Reflexión: Evaluación con Encuestas Mixtas y Guías de Observación."
      ]
    },
    {
      title: "13. Acciones en el Aula",
      items: [
        "• Recuperación de netbooks discontinuadas (Conectar Igualdad 2012).",
        "• Despliegue de Debian + ICEWM + Geany para transparentar la compilación.",
        "• Mediación pedagógica en talleres presenciales y acompañamiento virtual."
      ]
    },
    {
      title: "14. Resultados I | Fluidez Didáctica",
      items: [
        "• Eliminación de Tiempos Muertos: 100% en GI sin interrupciones vs. 40% en GR.",
        "• Iteración Activa: 90% en GI afirma que la velocidad le permite probar y experimentar más."
      ]
    },
    {
      title: "15. Resultados II | Autonomía y Apropiación",
      items: [
        "• Caja Transparente: 90% del GI afirma haber aprendido aspectos nuevos sobre sistemas.",
        "• Adopción Real: 90% del GI afirma que probaría instalar GNU/Linux en su propia computadora después de esta experiencia."
      ]
    },
    {
      title: "16. Conclusiones",
      items: [
        "• Se demostró que la ineficiencia privativa era una barrera pedagógica real.",
        "• El software libre restauró la viabilidad del hardware antiguo y garantizó la equidad.",
        "• Se gestaron las condiciones para que el alumno sea un sujeto activo y soberano."
      ]
    },
    {
      title: "17. Líneas Futuras de Investigación",
      items: [
        "• Escalabilidad Institucional a toda la carrera.",
        "• Capacidad de formación docente autónoma.",
        "• Estudio del impacto en la reducción de la ansiedad académica en programación.",
        "• Creación de comunidades de práctica / Clubes de Software Libre."
      ]
    },
    {
      title: "18. Cierre y Agradecimientos",
      items: [
        "• Agradecimiento especial al tribunal y al Dr. Gustavo Eduardo Carr.",
        "• La mediación tecno-pedagógica como eje de la soberanía educativa.",
        "¡Muchas Gracias!"
      ]
    },
    {
      title: "Anexo 1: Complemento de Resultados I (Fluidez)",
      items: [
        "• Ítem 1 (Velocidad): 90% GI vs 70% GR.",
        "• Ítem 2 (Sin esperas): 100% GI vs 40% GR.",
        "• Ítem 3 (Sin frustración): 90% GI vs 40% GR."
      ]
    },
    {
      title: "Anexo 2: Complemento de Resultados II (Didáctica)",
      items: [
        "• Ítem 4 (Concentración): 60% GI vs 30% GR.",
        "• Ítem 5 (Experimentación): 90% GI vs 60% GR.",
        "• Ítem 6 (Ayuda al aprendizaje): 100% GI vs 50% GR."
      ]
    },
    {
      title: "Anexo 3: Complemento de Resultados III (Soberanía)",
      items: [
        "• Ítem 7 (Aprendizaje nuevo): 90% acuerdo.",
        "• Dimensión Ética (Interés filosofía SL): 80% positivo.",
        "• Autonomía Real (GNU/Linux en el hogar): 90% de intención de adopción."
      ]
    },
    {
      title: "Anexo 4: Selección Geany vs. VS Code",
      items: [
        "• VS Code: Basado en Electron, telemetría corporativa, inviable en RAM <= 4GB.",
        "• Geany: Consumo < 30% RAM en reposo, transparencia en scripts de compilación."
      ]
    },
    {
      title: "Anexo 5: Validación Técnica de Viabilidad",
      items: [
        "• GI (Debian+ICEWM): RAM en reposo < 30%, respuesta inmediata (<1s).",
        "• GR (Win+VSCode): RAM en reposo > 78%, latencia alta (>60s en compilación)."
      ]
    }
  ];

  // Generar cada diapositiva en bucle
  for (var i = 0; i < deckData.length; i++) {
    var data = deckData[i];
    var newSlide = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
    newSlide.getBackground().setSolidFill("#f8fafc"); // Fondo Claro
    
    // Encabezado de Diapositiva
    var headerBox = newSlide.insertShape(SlidesApp.ShapeType.RECTANGLE, 40, 30, 640, 50);
    headerBox.getFill().setTransparent();
    headerBox.getBorder().setTransparent();
    var headerTF = headerBox.getText();
    headerTF.setText(data.title);
    headerTF.getTextStyle().setFontSize(20).setBold(true).setForegroundColor("#b5162b");
    
    // Cuerpo del Contenido (Viñetas)
    var contentBox = newSlide.insertShape(SlidesApp.ShapeType.RECTANGLE, 40, 90, 640, 270);
    contentBox.getFill().setSolidFill("#ffffff");
    contentBox.getBorder().setColor("#cbd5e1");
    var contentTF = contentBox.getText();
    contentTF.setText(data.items.join("\n\n"));
    contentTF.getTextStyle().setFontSize(14).setForegroundColor("#334155");
  }

  Logger.log("¡Presentación creada con éxito! Revisa tu Google Drive.");
}