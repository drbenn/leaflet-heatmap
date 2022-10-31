1. npm install leaflet @asymmetrik/ngx-leaflet
2. npm install --save-dev @types/leaflet
3. In app.module
    import { LeafletModule } from '@asymmetrik/ngx-leaflet';
      imports: [
    BrowserModule,
    AppRoutingModule,
    LeafletModule
  ],
4. In angular.json update architect -> build -> assets to include the 3 line object(w glob, input, output)
        "assets": [
        "src/favicon.ico",
        "src/assets",
        {
        "glob": "**/*",
        "input": "./node_modules/leaflet/dist/images",
        "output": "assets/"
        }
5. Update styles.scss with at minimum the import
    @import "~leaflet/dist/leaflet.css";

    .map-container {
        height: 400px;
    }
