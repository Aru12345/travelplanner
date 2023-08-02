import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lat,
        tr_latitude: ne.lng,
      },
      headers: {
        "X-RapidAPI-Key": "",
        "X-RapidAPI-Host": "",
      },
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
