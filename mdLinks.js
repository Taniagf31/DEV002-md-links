const {
  addFileMd,
  routeFalse,
  trueRoute,
  brokenLinks,
  statsRep
} = require("./functions"); //use destructuración para importar funciones

const mdLinks = (path, options) => {
  return new Promise((res, rej) => {
    if (options[0] === undefined && options[1] === undefined) {
      const inputPath = addFileMd(path);
      inputPath.map((element) => {
        //map recibe una funct y la funct recibe un elemento a iterar
        routeFalse(element)
          .then((data) => {
            console.log(data);
            return res(data);
          })
          .catch((error) => {
            rej("La ruta ingresada no es válida", error);
          });
      });
    } else {
      if (
        (options[0] === "--validate" && options[1] === "--stats") || //condiciones dan sentido a las opciones 
        (options[0] === "--stats" && options[1] === "--validate") //validar abreviatura de options
      ) {
        const inputPath = addFileMd(path);
        inputPath.map((element) => {
          routeFalse(element).then((data) => {
            trueRoute(data).then((data)=> {
              // console.log(brokenLinks(data));
            return res (brokenLinks(data));
          })
        });
      });
      } else if (options[0] === "--validate") {
        const arrMd = addFileMd(path);
        arrMd.map((element) => {
          routeFalse(element)
            .then((data) => {
              trueRoute(data).then((data)=> {
                // console.log(data) 
                return res(data)
              });
            })
            .catch((error) => {
              return rej("La ruta ingresada es válida", error);
            });
        });
      } else if (options[0] === "--stats") {
        const arrMdStast = addFileMd(path);
       
        arrMdStast.map((element) => {
          routeFalse(element).then((data) => {
            // console.log(statsRep(data));
            return res(statsRep(data));
          })
          .catch(error => console.log(error)) 
          
        });
      }
    }
  });
};
module.exports = mdLinks;