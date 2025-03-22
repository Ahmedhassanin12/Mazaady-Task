"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState, type ReactNode } from "react";

const ReactQueryProvider = ({ children }: { children: ReactNode }) => {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					retry: false,
				},
			},
		}),
	);

	return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default ReactQueryProvider;
