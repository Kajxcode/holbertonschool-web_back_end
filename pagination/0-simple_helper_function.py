#!/usr/bin/env python3
"""this module defines a function"""

def index_range(page: int, page_size: int) -> tuple[int, int]:
    """this is a function"""
    start = (page - 1) * page_size
    end = page * page_size
    return (start, end)
