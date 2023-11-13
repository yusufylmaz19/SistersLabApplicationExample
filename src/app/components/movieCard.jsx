import React from "react";
import { Box, styled, Avatar, Tooltip } from "@mui/material";
import { useRouter } from "next/navigation";

export const FlexBox = styled(Box)({
  display: "flex",
});

export default function MovieCard({ item }) {
  const CardContainer = styled(Box)({
    width: 300,
    height: 360,
    backgroundColor: "#f6f6f6",
    marginTop: 20,
    borderRadius: 10,
  });

  const route = useRouter();

  return (
    <CardContainer>
      <FlexBox
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        width="90%"
        margin="0 auto"
      >
        <FlexBox mt={1}>
          <img src={item.img} width={270} height={250} />
        </FlexBox>
        <FlexBox width="100%" justifyContent="space-between" mt={1}>
          <h5>{item.name}</h5>
          <h5>{item.year}</h5>
        </FlexBox>
        <FlexBox gap={2} mt={2}>
          {item.casts.map((cast, index) => (
            <Tooltip title={cast} arrow>
              <Avatar
                src="/static/avatar.svg"
                sx={{
                  width: "40px !important",
                  height: "40px !important",
                  cursor: "pointer",
                }}
                key={index}
                onClick={() => route.push(`movie/${cast}`)}
              />
            </Tooltip>
          ))}
        </FlexBox>
      </FlexBox>
    </CardContainer>
  );
}
