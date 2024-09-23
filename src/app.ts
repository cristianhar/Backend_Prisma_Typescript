import Express from "express";
import cors from "cors";
import helmet from "helmet";
import Routes from "./Routes/Routes";

const App = Express();
App.use(cors());
App.use(helmet());
App.use(Express.urlencoded({ extended: true }));
App.use(Express.json());
App.use(Routes);



const PORT = 3000;
App.listen(PORT, (): void => {
    console.log(`Server is running on port http://www.localhost:${PORT}`);

});
