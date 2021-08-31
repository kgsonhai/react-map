import { RouterConfig } from "./routerConfig";

export const listMenu = [
    {
        ids: 1,
        name: 'autosuggest',
        url: RouterConfig.demo.autosugest.autosugest,
        children: 0
    },
    {
        ids: 2,
        name: 'geocode',
        url: RouterConfig.demo.autosugest.autosugest,
        children: 0
    },
    {
        ids: 3,
        name: 'place',
        url: RouterConfig.demo.autosugest.autosugest,
        children: 0
    },
    {
        ids: 4,
        name: 'route',
        url: RouterConfig.demo.route.route,
        children: 0
    },
    {
        ids: 5,
        name: 'title',
        url: RouterConfig.demo.autosugest.autosugest,
        children: 0
    },
    {
        ids: 6,
        name: 'V2',
        url: RouterConfig.demo.geocode.geocode,
        children: 2
    },
    {
        ids: 7,
        name: 'details',
        url: RouterConfig.demo.place.detail,
        children: 3
    },
    {
        ids: 8,
        name: 'text-search',
        url: RouterConfig.demo.place.textSearch,
        children: 3
    },
    {
        ids: 9,
        name: 'nearby-search',
        url: RouterConfig.demo.place.nearbySearch,
        children: 3
    },
    {
        ids: 10,
        name: 'eta',
        url: RouterConfig.demo.autosugest.autosugest,
        children: 4
    },
    {
        ids: 11,
        name: 'matrix',
        url: RouterConfig.demo.autosugest.autosugest,
        children: 4
    },
    {
        ids: 12,
        name: 'graph',
        url: RouterConfig.demo.route.graph,
        children: 4
    },
    {
        ids: 13,
        name: 'raster',
        url: RouterConfig.demo.tile.raster,
        children: 5
    },
    {
        ids: 14,
        name: 'route',
        url: RouterConfig.demo.route.route,
        children: 4
    },
]