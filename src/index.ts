import { RouteService } from './service/route.service';
import * as express from "express";
import { routes } from './decorator/request.decorator';
const app = express();

let routeService = new RouteService();
routeService.getRoutes(app);

app.get("/", (req, res) => {
    res.send(routes);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`Server is running in http://localhost:${PORT}`)
});