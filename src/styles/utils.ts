export enum Breakpoint {
	Small = 482,
	Medium = 822,
}

interface IBreakpointHelper {
	until: string;
	upon: string;
}

export const breakpoint = (bp: Breakpoint): IBreakpointHelper => ({
	until: `(max-width: ${bp - 1}px)`,
	upon: `(min-width: ${bp}px)`,
});

export const breakpoints: Record<Breakpoint, IBreakpointHelper> = {
	[Breakpoint.Small]: breakpoint(Breakpoint.Small),
	[Breakpoint.Medium]: breakpoint(Breakpoint.Medium),
};
