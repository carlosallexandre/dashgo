import { Box, HStack, Stack, Text } from "@chakra-ui/react";
import { PaginationItem } from "./PaginationItem";

interface PaginationProps {
  total: number;
  perPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => from + index + 1)
    .filter(page => page > 0)
}

export function Pagination({
  total,
  perPage = 10,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const FIRST_PAGE = 1
  const LAST_PAGE = Math.floor(total / perPage)
  
  const previousPages = currentPage > 1
    ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
    : []

  const nextPages = currentPage < LAST_PAGE
    ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, LAST_PAGE))
    : []

  return (
    <Stack
      direction={['column', 'row']}
      mt='8'
      justify='space-between'
      align='center'
      spacing='6'
    >
      <Box>
        <strong>0</strong> - <strong>10</strong> de <strong>100</strong>
      </Box>

      <HStack align='center'spacing='2'>
        {(currentPage - siblingsCount) > FIRST_PAGE && (
          <>
            <PaginationItem onPageChange={onPageChange}>{FIRST_PAGE}</PaginationItem>
            {(currentPage - siblingsCount) > (FIRST_PAGE + 1) && (
              <Text color="gray.300" w='8' textAlign='center'>...</Text>
            )}
          </>
        )}

        {previousPages.length > 0 && previousPages.map(page => (
          <PaginationItem onPageChange={onPageChange} key={page}>{page}</PaginationItem>
        ))}

        <PaginationItem onPageChange={onPageChange} isCurrent>{currentPage}</PaginationItem>

        {nextPages.length > 0 && nextPages.map(page => (
          <PaginationItem onPageChange={onPageChange} key={page}>{page}</PaginationItem>
        ))}

        {(currentPage + siblingsCount) < LAST_PAGE && (
          <>
            {(currentPage + siblingsCount) < (LAST_PAGE - 1) && (
              <Text color="gray.300" w='8' textAlign='center'>...</Text>
            )}
            <PaginationItem onPageChange={onPageChange}>{LAST_PAGE}</PaginationItem>
          </>
        )}
      </HStack>
    </Stack>
  )
}