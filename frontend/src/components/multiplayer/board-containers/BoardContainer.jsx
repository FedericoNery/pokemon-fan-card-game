import { useTheme } from "@emotion/react";

const BoardContainer = ({ ...props }) => {
    const theme = useTheme();
    const isSun = theme.palette.mode === "light"

    return <div
        style={{
            height: "100vh",
            background: isSun ? "linear-gradient(0deg, lightyellow 50%, lightblue 50%)" : "linear-gradient(0deg, #292b21 50%, #212a2c 50%)"
        }}
    >
        {props.children}
    </div>
}

export default BoardContainer;
