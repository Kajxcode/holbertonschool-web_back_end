#!/usr/bin/env python3
"""
This module defines a function
"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """takes a mixed list of int and float"""
    return float(sum(mxd_lst))
