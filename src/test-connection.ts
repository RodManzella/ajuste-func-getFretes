import { AppDataSource } from "./data-source";

AppDataSource.initialize()
  .then(() => {
    console.log("Conexão com o banco OK");
    return AppDataSource.destroy();
  })
  .catch((error) => {
    console.error("Erro ao conectar no banco:", error);
  });
