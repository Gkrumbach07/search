// react
import React, { useState } from "react";

// material-ui
import { Typography, Button, Grid } from "@material-ui/core";
import ToggleButton from "@material-ui/lab/ToggleButton";
import ToggleButtonGroup from "@material-ui/lab/ToggleButtonGroup";

// local
import TabPanel from "components/Elements/TabPanel";
import logo from "assets/thoth-logo.png";

import {PackageSearch, AdviseCreation} from "../components";

export const Home = () => {
    // utility states
    const [mode, setMode] = useState("multiple");

    // change mode view
    const handleMode = (event, newMode) => {
        if (newMode) {
            setMode(newMode);
        }
    };


    return (
        <Grid container justifyContent="center">
            <Grid item>
                <Button sx={{ marginTop: 10 }}>
                    <img alt="Thoth Logo" src={logo} height={300} width={"100%"} />
                </Button>
            </Grid>
            <Grid container item justifyContent="center" mt={5} spacing={0}>
                <Grid container item xs={3} align="center" mr={5}>
                    <Grid item xs={12} align="left" mb={3}>
                        <Typography variant="h4">
                            <b>Thoth Search</b>
                        </Typography>
                    </Grid>
                    <Grid item xs={12} align="left">
                        <Typography variant="subtitle1">
                            Thoth Search is a tool that runs analysis on a Python application.
                            It utilizes package metadata and Thoth Adviser to analyse and
                            recommend a software stack. You can run analysis on an entire
                            Python application using a properly formatted Pipfile and
                            Pipfile.lock. Alternatively, you can analyse a single Python
                            package to see what Thoth knows about the package.
                        </Typography>
                    </Grid>
                </Grid>

                <Grid
                    item
                    container
                    xs={2}
                    direction="column"
                    justifyContent="center"
                    spacing={1}
                >
                    {[
                        ["One", "100k"],
                        ["Two", "20%"],
                        ["Three", "62"],
                        ["Four", "N/A"]
                    ].map((stat, i) => {
                        return (
                            <Grid item container alignItems="center" key={i}>
                                <Grid item xs={6}>
                                    <Typography variant="h6">
                                        <b>Thoth Statistic {stat[0]}</b>
                                    </Typography>
                                </Grid>
                                <Grid item xs={4}>
                                    <Typography variant="h5" align="right">
                                        {stat[1]}
                                    </Typography>
                                </Grid>
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid item xs={12} align="center" mt={3} mb={4}>
                    <ToggleButtonGroup
                        value={mode}
                        exclusive
                        onChange={handleMode}
                        size={"large"}
                    >
                        <ToggleButton value="single">
                            <b>single package analysis</b>
                        </ToggleButton>
                        <ToggleButton value="multiple">
                            <b>Python application analysis</b>
                        </ToggleButton>
                    </ToggleButtonGroup>
                </Grid>

                <Grid item xs={5}>
                    <TabPanel value={mode} index="single">
                        <PackageSearch />
                    </TabPanel>
                    <TabPanel value={mode} index={"multiple"}>
                       <AdviseCreation />
                    </TabPanel>
                </Grid>
            </Grid>
        </Grid>
    );
};