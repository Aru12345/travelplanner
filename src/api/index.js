import axios from "axios";

const URL = "https://travel-advisor.p.rapidapi.com/hotels/list-in-boundary";

export const getPlacesData = async (sw, ne) => {
  try {
    const {
      data: { data },
    } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,

        tr_longitude: ne.lng,
        bl_longitude: sw.lng,
        tr_latitude: ne.lat,
      },
      headers: {},
    });

    return data;
  } catch (error) {
    console.log(error);
  }
};
