import * as helpers from './helpers';
import {menu} from "./mock"
import Moment from "moment";
import { extendMoment } from "moment-range";

const moment = extendMoment(Moment);

describe("Testa o retorno da função de formato de dinheiro", () => {
  it("valor é 0", () => {
    let formatedMoney = helpers.formatMoney(0);
    expect(formatedMoney).toContain("R$ 0.00");
  })

  describe("valor é diferente de 0", () => {

    it("valor é um inteiro", () => {
      let formatedMoney = helpers.formatMoney(8);
      expect(formatedMoney).toContain("R$ 8.00");
    })

    it("valor é quebrado", () => {
      let formatedMoney = helpers.formatMoney(7.25);
      expect(formatedMoney).toContain("R$ 7.25");
    })
  })
})

describe("Testa o mapeamento de grupos", () => {
  it("valor é o menu completo", () => {
    let groups = helpers.mapGroups(menu);
    expect(groups).toEqual(["Doces", "Salgados", "Pratos estranhos", "Sucos exóticos"])
  })

  it("valor é o menu vazio", () => {
    let groups = helpers.mapGroups([]);
    expect(groups).toEqual([])
  })
 
})

describe("Testa o mapeamento de menus", () => {
  it("valor é o menu completo", () => {
    let mapedMenu = helpers.mapMenu(menu);
    expect(mapedMenu).toEqual({"Doces":[], "Salgados":[], "Pratos estranhos":[], "Sucos exóticos":[]})
  })

  it("valor é o menu vazio", () => {
    let mapedMenu = helpers.mapMenu([]);
    expect(mapedMenu).toEqual({});
  })
})

describe("Testa o mapeamento de refeições", () => {
  it("valor é o menu completo", () => {
    let mapedMenu = helpers.mapMenu(menu);
    let meals = helpers.mapMeals(menu, mapedMenu);
    expect(meals).toBeDefined();
  })

  it("valor é o menu completo", () => {
    let meals = helpers.mapMeals([],[]);
    expect(meals).toEqual([]);
  })
})

describe("Testa o filtro de restaurants", () => {
  const restaurants = [
    {
      id: 1,
      name: "Cupcake para todos",
      address: "Rua dos Sonhos, 310"
    }, 
    {
      id: 2,
      name: "Comida de república",
      address: "Rua, 890"
    }
  ]
  it("quando a busca traz mais de um valor", () => {
    let filteredRestaurant = helpers.filterText(restaurants, "")
    expect(filteredRestaurant.length).toEqual(2);
  })

  it("quando a busca traz um valor exato", () => {
    let filteredRestaurant = helpers.filterText(restaurants, "Comida de república")
    expect(filteredRestaurant).toEqual([{id: 2,name: "Comida de república",address: "Rua, 890"}]);
  })

  it("quando a busca traz um valor vazio", () => {
    let filteredRestaurant = helpers.filterText(restaurants, "asuhasudhausdhsaudha")
    expect(filteredRestaurant).toEqual([]);
  })
})

describe("se o estabelicimento esta aberto", () => {
  let hours = [];
  hours.push({from: "09:00",to: "18:00", days: [2,3,4,5,6]})
  hours.push({from: "11:00",to: "20:00", days: [1,7]})

  
  it("quando o estabelicimento esta aberto nos finais de semana", () => {
    let isOpen = helpers.isOnTimeInterval(hours, 7, moment("2019-07-05T19:25:10.291"));
    expect(isOpen).toEqual(true);
  })

  it("quando o estabelicimento esta aberto nos dias da semana", () => {
    let isOpen = helpers.isOnTimeInterval(hours, 3, moment("2019-07-05T11:25:10.291"));
    expect(isOpen).toEqual(true);
  })

  it("quando o estabelicimento não está aberto nos finais de semana", () => {
    let isOpen = helpers.isOnTimeInterval(hours, 7, moment("2019-07-05T22:25:10.291"));
    expect(isOpen).toEqual(false);
  })

  it("quando o estabelicimento não esta aberto nos dias da semana", () => {
    let isOpen = helpers.isOnTimeInterval(hours, 2, moment("2019-07-05T01:25:10.291"));
    expect(isOpen).toEqual(false);
  })

  it("quando o horário de entrada é maior que o horário de saída", () => {
    let hoursNight = [];
    hoursNight.push({from:"20:00", to:"02:00", days:[1,2,3,4,5,6,7]})

    let isOpen = helpers.isOnTimeInterval(hoursNight, 5, moment("2019-07-06T01:00:00.000"));
    expect(isOpen).toEqual(true);
  })
})