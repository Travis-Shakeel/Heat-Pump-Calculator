import React from 'react';
import { Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import '../energySavingTips/EnergySavingTips.scss';
import EnergySavingTipsPicture from '../assets/images/EnergySavingTipsPicture.jpg';
import EnergySavingTipsPic1 from '../assets/images/EnergySavingTipsPic1.png';
import EnergySavingTipsPic2 from '../assets/images/EnergySavingTipsPic2.png';
import EnergySavingTipsPic3 from '../assets/images/EnergySavingTipsPic3.png';
import EnergySavingTipsPic4 from '../assets/images/EnergySavingTipsPic4.png';

export const EnergySavingTips = () => {
    return (
        <>
        <div className = "heading">
            <h2>Energy Saving Tips</h2>
            <p>Welcome to our Energy Saving Tips page! Find quick Energy Saving Tips below.</p>
        </div>
        {<img src = {EnergySavingTipsPicture} className = 'EnergySavingTipsPicture' alt="EnergySavingTipsPicture" ></img>}
            <Grid container spacing={4} style={{ justifyContent: 'Center', marginTop: "1rem", marginBottom: "2rem" }}>
                <Grid item xs={12} md={2.4} lg={2} >
                    <Card sx={{ maxWidth: 345, height: '600px' }}>
                        <CardMedia component="img" alt="Heating your Home" height="150" image={EnergySavingTipsPic1} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">Heating your Home in Cold Temperatures</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Heat pumps can keep your home warm even in subzero temperatures. Contrary to popular belief, they work efficiently in cold climates.
                                In Calgary, heating your home with an air-source heat pump below 10°C may lead to higher utility bills compared to using a 
                                high-efficiency natural gas furnace. This is because the blended rate of electricity is currently higher than natural gas per unit of energy consumed.
                                Heat pumps are also notable for their environmental benefits, emitting less carbon dioxide compared to traditional heating systems. 
                                This makes them a greener choice for homeowners looking to reduce their carbon footprint. 
                               
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={2.4} lg={2}>
                    <Card sx={{ maxWidth: 345, height: '600px' }}>
                        <CardMedia component="img" alt="Efficiency Furnace" height="150" image={EnergySavingTipsPic2} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">Pairing your Heat Pump with a High Efficiency Furnace</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Unless your home has been built with thick interior and exterior insulation and has been professionally air sealed, it is wise to ensure your 
                                home has a source of natural gas heating for those very cold winter days and nights. 
                                Natural gas heating systems, while traditional, are known for their ability to provide consistent and powerful heating quickly, 
                                which can be crucial during extreme cold snaps. They also tend to have lower operational costs in many areas compared to standalone furnaces
                                when paired with a heatpump, depending on local gas prices. 
                                
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={2.4} lg={2}>
                    <Card sx={{ maxWidth: 345, height: '600px' }}>
                        <CardMedia component="img" alt="Solar System" height="150" image={EnergySavingTipsPic3} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">Pairing your Heat Pump with a Solar Photovoltaic System</Typography>
                            <Typography variant="body2" color="text.secondary">
                                Installing a solar PV system along with your heat pump will allow you to generate electricity credits that you can use in the winter to offset 
                                the cost of heating your home with an air-source heat pump.
                                This will allow you to operate your heat pump at lower exterior temperatures and at a lower cost. Furthermore, by leveraging solar power, 
                                you're tapping into a renewable energy source that reduces your dependency on the grid and minimizes your carbon footprint. 
                                In addition to long-term savings on utility bills, this setup may qualify you for various government incentives.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} md={2.4} lg={2}>
                    <Card sx={{ maxWidth: 345, height: '600px' }}>
                        <CardMedia component="img" alt="GHG Emissions" height="150" image={EnergySavingTipsPic4} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">GHG Emissions from Heat Pumps and Furnaces</Typography>
                            <Typography variant="body2" color="text.secondary">
                                60% of Alberta’s electricity is generated by natural gas power plants. Because of this, the GHG emissions created by a heat pump can be more than emissions created by a natural gas furnace at lower temperatures.
                                As it gets colder outside, the heat pump must work harder to create heat, reducing its efficiency, and causing it to draw more electricity from the grid.
                                As cleaner sources of electricity are added to Alberta’s electricity system such as wind, solar, hydro, and nuclear, the GHG emissions created by your heat pump will go down.
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </>
    );
}
