#!/usr/bin/env python3
"""
This module defines a function
"""
from typing import List, Tuple

def element_length(lst: List[str]) -> List[Tuple[str, int]]:
    """annotation"""
    return [(i, len(i)) for i in lst]
