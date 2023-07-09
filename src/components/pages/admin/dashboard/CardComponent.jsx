import {Card, Flex, Metric, Text} from "@tremor/react";

export default function CardComponent({ item, title, ...restProps }) {
    return (
        <Card {...restProps}>
            <Flex alignItems="start">
                <div className="truncate">
                    <Text>{title}</Text>
                    <Metric className="truncate">{item.length}</Metric>
                </div>
            </Flex>
        </Card>
    );
}